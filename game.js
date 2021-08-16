const boardContainer = document.querySelectorAll('board');

const GameBoard = (function() {
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
    return {restartGame}
})();

const Player = (name, symbol) => {
    const hasTurn = true;
    const getName = () => name;
    const getSymbol = () => symbol;

    return { hasTurn, getName, getSymbol };
};

document.getElementById('restart').addEventListener('click', GameBoard.restartGame);