import React from "react";
import "./style.css";
export function TicToe() {
  const [turn, setTurn] = React.useState("x");
  const [cells, setCells] = React.useState(Array(9).fill(""));
  const [win, setWin] = React.useState();
  const handleClick = (num) => {
    let squares = [...cells];
    if (cells[num] !== "") {
      alert("allaqachon belgilangan!");
      return;
    }
    if (turn == "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    checkWiner(squares);
    setCells(squares);
  };
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  const checkWiner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diognal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((element) => {
        if (
          squares[element[0]] == "" ||
          squares[element[1]] == "" ||
          squares[element[2]] == ""
        ) {
        } else if (
          squares[element[0]] === squares[element[1]] &&
          squares[element[1]] === squares[element[2]]
        ) {
          setWin(squares[element[0]]);
        }
      });
    }
  };
  const restartGame = () => {
    setWin(null);
    setCells(Array(9).fill(""));
  };
  return (
    <>
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <p>Turn:{turn.toUpperCase()}</p>
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        {win && (
          <>
            <p>{win.toUpperCase()} : to Win 🏆</p>
            <button onClick={() => restartGame()}>Restart 🔃</button>
          </>
        )}
      </div>
    </>
  );
}
