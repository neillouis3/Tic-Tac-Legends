from player import player
from flask import Flask, request, jsonify

app = Flask(__name__)

class TicTacToe:
    def __init__(self):
        self.board = [' ' for x in range(9)]
        self.playerOne = player('PLayer One', 'X')  # Player One
        self.playerTwo = player('Player Two', 'O')  # Player Two
        self.currentPlayer = self.playerOne
        self.winner = None
        self.gameRunning = True


# Test --------------------------------------------------------------------------------------------
    def printBoard(self):
        print(' ' + self.board[0] + ' | ' + self.board[1] + ' | ' + self.board[2])
        print('---|---|---')
        print(' ' + self.board[3] + ' | ' + self.board[4] + ' | ' + self.board[5])
        print('---|---|---')
        print(' ' + self.board[6] + ' | ' + self.board[7] + ' | ' + self.board[8])

    def playerInput(self):
        valid = False
        while not valid:
            playerMove = input('Enter a number between 1 and 9: ')
            try:
                playerMove = int(playerMove)
                if playerMove >= 1 and playerMove <= 9:
                    if self.board[playerMove - 1] == ' ':
                        self.board[playerMove - 1] = self.currentPlayer.symbol
                        valid = True
                    else:
                        print('That space is already taken')
                else:
                    print('Please enter a number between 1 and 9')
            except:
                print('Please enter a number')



    def checkWin(self):
        # Check for win or tie logic here
        # check rows
        if self.board[0] == self.board[1] == self.board[2] != ' ':
            self.winner = self.board[0]
        elif self.board[3] == self.board[4] == self.board[5] != ' ':
            self.winner = self.board[3]
        elif self.board[6] == self.board[7] == self.board[8] != ' ':
            self.winner = self.board[6]
        # check columns
        elif self.board[0] == self.board[3] == self.board[6] != ' ':
            self.winner = self.board[0]
        elif self.board[1] == self.board[4] == self.board[7] != ' ':
            self.winner = self.board[1]
        elif self.board[2] == self.board[5] == self.board[8] != ' ':
            self.winner = self.board[2]
        # check diagonals
        elif self.board[0] == self.board[4] == self.board[8] != ' ':
            self.winner = self.board[0]
        elif self.board[2] == self.board[4] == self.board[6] != ' ':
            self.winner = self.board[2]
        # check tie
        elif ' ' not in self.board:
            self.winner = 'Tie'

    def switchPlayer(self):
        if self.currentPlayer == self.playerOne:
            self.currentPlayer = self.playerTwo
        else:
            self.currentPlayer = self.playerOne

    def restartGame(self):
        self.board = [' ' for x in range(9)]
        self.winner = None
        self.gameRunning = True

    def exitGame(self):
        self.gameRunning = False

    def startGame(self):
        while self.gameRunning:
            self.printBoard()
            self.playerInput()
            self.checkWin()
            self.switchPlayer()

# Usage
game = TicTacToe()
game.startGame()

