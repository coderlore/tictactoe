const boardContainer = document.querySelectorAll('board');

/* const GameBoard = (function() {
    let player = 'X';
    const board = ['','','','','','','','',''];

    const play_board = document.querySelector('.board');
    const cells = Array.from(document.querySelectorAll('.cell'));
    const render_board = () => {
        board.forEach((i) => {
            play_board[1].innerHTML = board[1];
        })
    }

    return { render_board, board, play_board }

    function restartGame() {
        //board = ['','','','','','','','',''];
        alert("Game Restarted!")
    }
    return { restartGame }
    let _restart = function(){
        alert('Boom Boom')
    }

    return { restart: _restart}

    function handleClick(event) {
        const clickedCellNumber = event.getAttribute('data-btn')
        console.log(clickedCellNumber);
    }
    return {handleClick} 
    

})(); */

//document.getElementById('cell_0').addEventListener('click', GameBoard.handleClick);

//This works, but need to get this into the module
/* document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleClicked, { once: true})
})

function handleClicked(e) {
    console.log('Clicked!')
} */

//document.getElementById('restart').addEventListener('click', GameBoard.restartGame);

const gameBoard = (function(){
    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
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

    console.log(winningCombos[1])

    let _restart = function(){
        alert('I restarted')
        board = ['','','','','','','','',''];
    }
    document.getElementById('restart').addEventListener('click', _restart)

    //return {restart: _restart}

    let _handleClicky = function(e){
        let square = e.target;
        let squareIndex = square.getAttribute('data-btn');

        handleSquarePlayed(square, squareIndex);
        console.log(squareIndex)
    }

    let handleSquarePlayed = function(square, squareIndex){
        board[squareIndex] = currentPlayer;
        square.innerHTML = currentPlayer;
        console.log(board)
    }

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', _handleClicky, { once: true})
    })
})();

//gameBoard.restart();
//document.getElementById('restart').addEventListener('click',gameBoard.restart)

