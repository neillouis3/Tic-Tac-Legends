#make board
def make_board():
    board = []
    for i in range(3):
        board.append([' ']*3)
    return board


#make a move
def make_move(board, move, player):
    if board[move[0]][move[1]] == ' ':
        board[move[0]][move[1]] = player
        return True
    return False


# Path: Projects/Tic-Tac-Toe/main/components/backend/normalMode.py


#check if the game is over
def check_winner(board):
    for i in range(3):
        if board[i][0] == board[i][1] == board[i][2] and board[i][0] != ' ':
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] != ' ':
            return board[0][i]
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != ' ':
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != ' ':
        return board[0][2]
    return None

