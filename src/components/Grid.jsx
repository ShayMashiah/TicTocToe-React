import "../css/Grid.css";
import Button from "./Button";
import { useState } from "react";

const Grid = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');


  const handleClick = (index) => {
    if (board[index] === '') {
      const newBoard = [...board];
      if (currentPlayer === 'X') {
        newBoard[index] = <img src="src/assets/x-image.png" alt="X" />;
      } else {
        newBoard[index] = <img src="src/assets/o-image.jpeg" alt="O" />;
      }
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  return (
    <div className="container">
      <div className="grid">
        {board.map((value, i) => (
          <Button key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
