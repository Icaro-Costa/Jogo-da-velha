import React from 'react';
import { Player } from '../types/gameTypes';

interface SquareProps {
  value: Player;
  index: number;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, index, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value === null ? index : value}
    </button>
  );
};

export default Square;