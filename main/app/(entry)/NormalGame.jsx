
import { View, Text } from 'react-native';

export default function NormalGame() {
        const [board, setBoard] = useState(Array(9).fill(null));
        const [isXNext, setIsXNext] = useState(true);

        const handleCellClick = (index) => {
            if (board[index] || calculateWinner(board)) {
                return;
            }
            const newBoard = [...board];
            newBoard[index] = isXNext ? 'X' : 'O';
            setBoard(newBoard);
            setIsXNext(!isXNext);
        };

        const calculateWinner = (squares) => {
            const lines = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                [0, 4, 8], [2, 4, 6]             // diagonals
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
            return null;
        };
        const renderCell = (index) => {
            return (
                <TouchableOpacity 
                    style={styles.cell} 
                    onPress={() => handleCellClick(index)}
                >
                    <Text style={styles.cellText}>{board[index]}</Text>
                </TouchableOpacity>
            );
        };

        return (
            <View style={styles.board}>
                <View style={styles.row}>
                    {renderCell(0)}
                    {renderCell(1)}
                    {renderCell(2)}
                </View>
                <View style={styles.row}>
                    {renderCell(3)}
                    {renderCell(4)}
                    {renderCell(5)}
                </View>
                <View style={styles.row}>
                    {renderCell(6)}
                    {renderCell(7)}
                    {renderCell(8)}
                </View>
            </View>
        );
}


const styles = StyleSheet.create({
            board: {
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
            },
            row: {
                flexDirection: 'row',
            },
            cell: {
                width: 100,
                height: 100,
                backgroundColor: '#ddd',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#000',
            },
            cellText: {
                fontSize: 24,
                fontWeight: 'bold',
            },
        });


