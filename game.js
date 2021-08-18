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

    let _restart = function(){
        alert('I restarted')
        board = ['','','','','','','','',''];
    }
    document.getElementById('restart').addEventListener('click', _restart)

    //return {restart: _restart}

    let _handleClicky = function(e){
        let square = e.target.id;
        console.log(square)
    }
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', _handleClicky, { once: true})
    })
})();

//gameBoard.restart();
//document.getElementById('restart').addEventListener('click',gameBoard.restart)

