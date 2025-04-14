import React from 'react';
import { Player } from '../types/gameTypes';
interface SquareProps {
  value: Player;      
  onSquareClick: () => void; 
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;