import React from 'react';
import Square from './Square';
import { Player } from '../types/gameTypes';
import { calculateWinner } from '../logic/calculateWinner';

interface BoardProps {
  squares: Player[];
  onPlay: (nextSquares: Player[]) => void;
  xIsNext: boolean;
}

const Board: React.FC<BoardProps> = ({ squares, onPlay, xIsNext }) => {

  function handleClick(index: number) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = 'X'; 
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status: string;

  if (winner) {
    status = `Vencedor: ${winner}`; 
  } else if (squares.every(square => square !== null)) {
    status = "Empate!"; 
  } else {
    status = `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} index={0} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} index={1} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} index={2} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} index={4} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} index={5} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} index={7} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} index={8} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;