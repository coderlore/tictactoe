const boardContainer = document.querySelectorAll('board');
const gameBoard = (function(){
    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
    let gameActive = true;
    const display = document.querySelector('.game-status');
    display.innerHTML = `It's ${currentPlayer}'s turn`
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let _restart = function(){
        board = ['','','','','','','','',''];
        currentPlayer = 'X';
        display.innerHTML = `It's ${currentPlayer}'s turn`
        gameActive = true;
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
    }
    document.getElementById('restart').addEventListener('click', _restart)

    let _handleClicky = function(e){
        let square = e.target;
        let squareIndex = square.getAttribute('data-btn');
        if (board[squareIndex] != '' || !gameActive){
            return;
        }
        handleSquarePlayed(square, squareIndex);
        checkWinner();
    }

    let handleSquarePlayed = function(square, squareIndex){
        board[squareIndex] = currentPlayer;
        square.innerHTML = currentPlayer;
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', _handleClicky) 
    })

    let checkWinner = function(){
        let roundWon = false;
        for (let i = 0; i <= 7; i++){
            const winCondition = winningCombos[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === ''){
                continue;
            }
            if (a === b && b === c){
                roundWon = true;
                break
            }
        }
        if (roundWon){
            display.innerHTML = `Player ${currentPlayer} won!`;
            gameActive = false;
            return;
        }
        let draw = !board.includes('');
        if (draw){
            display.innerHTML = `It's a draw!`;
            gameActive = false;
            return;
        }
        playerTurn();
    }

    let playerTurn = function(){
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        display.innerHTML = `It's ${currentPlayer}'s turn`
    }
})();