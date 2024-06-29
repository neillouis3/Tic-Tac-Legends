
// import { View, Text, StyleSheet } from 'react-native';

// export default function NormalGame() {
//         const [board, setBoard] = useState(Array(9).fill(null));
//         const [isXNext, setIsXNext] = useState(true);

//         const handleCellClick = (index) => {
//             if (board[index] || calculateWinner(board)) {
//                 return;
//             }
//             const newBoard = [...board];
//             newBoard[index] = isXNext ? 'X' : 'O';
//             setBoard(newBoard);
//             setIsXNext(!isXNext);
//         };

//         const calculateWinner = (squares) => {
//             const lines = [
//                 [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
//                 [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
//                 [0, 4, 8], [2, 4, 6]             // diagonals
//             ];
//             for (let i = 0; i < lines.length; i++) {
//                 const [a, b, c] = lines[i];
//                 if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//                     return squares[a];
//                 }
//             }
//             return null;
//         };
//         const renderCell = (index) => {
//             return (
//                 <TouchableOpacity 
//                     style={styles.cell} 
//                     onPress={() => handleCellClick(index)}
//                 >
//                     <Text style={styles.cellText}>{board[index]}</Text>
//                 </TouchableOpacity>
//             );
//         };

//         return (
//             <View style={styles.board}>
//                 <View style={styles.row}>
//                     {renderCell(0)}
//                     {renderCell(1)}
//                     {renderCell(2)}
//                 </View>
//                 <View style={styles.row}>
//                     {renderCell(3)}
//                     {renderCell(4)}
//                     {renderCell(5)}
//                 </View>
//                 <View style={styles.row}>
//                     {renderCell(6)}
//                     {renderCell(7)}
//                     {renderCell(8)}
//                 </View>
//             </View>
//         );
// }


// const styles = StyleSheet.create({
//             board: {
//                 width: 300,
//                 height: 300,
//                 backgroundColor: '#fff',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             },
//             row: {
//                 flexDirection: 'row',
//             },
//             cell: {
//                 width: 100,
//                 height: 100,
//                 backgroundColor: '#ddd',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: '#000',
//             },
//             cellText: {
//                 fontSize: 24,
//                 fontWeight: 'bold',
//             },
//         });


import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
