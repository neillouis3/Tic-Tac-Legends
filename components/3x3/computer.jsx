import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Computer = ({ board, onComputerMove }) => {
  useEffect(() => {
    const makeComputerMove = () => {
      const availableMoves = board
        .map((cell, index) => (cell === null ? index : null))
        .filter(index => index !== null);

      if (availableMoves.length > 0) {
        const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        const newBoard = board.slice();
        newBoard[move] = 'O';
        onComputerMove(newBoard);
      }
    };

    if (board.includes(null)) {
      const timer = setTimeout(makeComputerMove, 1000);
      return () => clearTimeout(timer);
    }
  }, [board, onComputerMove]);

  return null;
};

Computer.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComputerMove: PropTypes.func.isRequired,
};

export default Computer;
