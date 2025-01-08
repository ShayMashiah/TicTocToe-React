import "../css/Grid.css";
import Button from "./Button";
import RestartButton from "./RestartButton";
import { useState } from "react";

const Grid = () => {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [displayBoard, setDisplayBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Check if there is a winner
  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes("")) {
      return "draw";
    }

    return null;
  };

  // Handle click on a cell
  const handleClick = (index) => {
    if (board[index] === "" && !checkWinner()) {

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);


      const newDisplayBoard = [...displayBoard];
      if (currentPlayer === "X") {
        newDisplayBoard[index] = (
          <img
            src="src/assets/x-image.png"
            alt="X"
            style={{ width: "3.5rem", height: "3.5rem" }}
          />
        );
      } else {
        newDisplayBoard[index] = (
          <img
            src="src/assets/o-image.jpeg"
            alt="O"
            style={{ width: "3.55rem", height: "3.5rem" }}
          />
        );
      }
      setDisplayBoard(newDisplayBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Handle restart button
  const handleRestart = () => {
    setBoard(Array(9).fill(""));
    setDisplayBoard(Array(9).fill(""));
    setCurrentPlayer("X");
  };

  const winner = checkWinner();


  // Display the status of the game
  let status = winner
  if (winner == "draw") {
        status = "It's a draw!"
  } else if (winner != null) {
        status = "The winner is:" + winner
  } else {
        status = "Current player is: " + currentPlayer
    }

    // Display the game board
  return (
    <div className="container">
      <div className="column-container">
        <div className="grid">
          {displayBoard.map((value, i) => (
            <Button key={i} value={value} onClick={() => handleClick(i)} />
          ))}
        </div>
        <h2 className="status">{status}</h2>
        {winner !== null ? <RestartButton onClick={handleRestart} /> : null}
      </div>
    </div>
  );
};

export default Grid;
