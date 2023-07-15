const gameBoard = document.querySelector('.game-board');
const boardBox = document.querySelector('.box');
const stats = document.querySelector('.stats');
const intro = document.querySelector('.intro');
const result = document.querySelector('.result');
const playBtn = document.querySelector('.playBtn');

// hide initial sections
gameBoard.style.display = 'none'
stats.style.display = 'none'
result.style.display = 'none'

// playnow
playBtn.addEventListener('click', () => {
    gameBoard.style.display = 'grid';
    stats.style.display = 'block';
    intro.style.display = 'none';
})
