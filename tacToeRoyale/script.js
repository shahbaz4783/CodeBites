const gameBoard = document.querySelector('.game-board');
const boardBox = document.querySelectorAll('.box');
const stats = document.querySelector('.stats');
const intro = document.querySelector('.intro');
const result = document.querySelector('.result');
const playBtn = document.querySelector('.playBtn');
const playAgainBtn = document.querySelector('.playAgain');
const exit = document.querySelector('.exit');
const resultMsg = document.querySelector('.result-msg');

// hide initial sections
gameBoard.style.display = 'none';
stats.style.display = 'none';
result.style.display = 'none';

// playnow
playBtn.addEventListener('click', () => {
	gameBoard.style.display = 'grid';
	stats.style.display = 'flex';
	intro.style.display = 'none';
});

let currentPlayer = 'X';

boardBox.forEach((box) => {
	box.addEventListener('click', () => {
		if (box.innerHTML === '') {
			box.innerHTML = currentPlayer;
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            box.classList.add('x-col');

			checkGameStatus();
			setTimeout(() => {
				computerMove();
			}, 500);
		}
	});
});

const checkGameStatus = () => {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	setTimeout(() => {
		for (let combo of winningCombos) {
			const [a, b, c] = combo;
			if (
				boardBox[a].innerHTML !== '' &&
				boardBox[a].innerHTML === boardBox[b].innerHTML &&
				boardBox[a].innerHTML === boardBox[c].innerHTML
			) {
				gameBoard.classList.add('blurBackground');
				result.style.display = 'flex';
				resultMsg.textContent = `${
					boardBox[a].innerHTML == 'X' ? 'You Won!' : 'You Lost'
				}`;
				return;
			}
		}

		if (Array.from(boardBox).every((box) => box.innerHTML !== '')) {
			gameBoard.classList.add('blurBackground');
			result.style.display = 'flex';
			resultMsg.textContent = "It's a tie!";
		}
	}, 3000);
};

const computerMove = () => {
	const randomIndex = Math.floor(Math.random() * 9);

	if (boardBox[randomIndex].innerHTML === '') {
		boardBox[randomIndex].innerHTML = 'O';
		currentPlayer = 'X';
		checkGameStatus();
	} else {
		computerMove();
	}
};

playAgainBtn.addEventListener('click', () => {
	boardBox.forEach((box) => {
		box.innerHTML = '';
	});

	result.style.display = 'none';
	gameBoard.classList.remove('blurBackground');

});

exit.addEventListener('click', () => {
	window.location.href = 'https://prolio.netlify.app/';
});
