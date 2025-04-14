import React, { useState } from 'react';
import Board from './Board';
import { Player } from '../types/gameTypes';

const Game: React.FC = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null)); 

  const [xIsNext, setXIsNext] = useState<boolean>(true); 
  function handlePlay(nextSquares: Player[]) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        { }
        <Board squares={squares} onPlay={handlePlay} xIsNext={xIsNext} />
      </div>
      <div className="game-info">
        <button onClick={handleReset} className="reset-button">
        Reiniciar o jogo
        </button>
      </div>
    </div>
  );
};

export default Game;