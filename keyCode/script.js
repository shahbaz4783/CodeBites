const displayValue = document.getElementById('box-1');
const displayCode = document.getElementById('box-2');
const displayKeyCode = document.getElementById('box-3');

const getKeyCode = (e) => {
	if (e.keyCode === 32) {
		displayValue.innerText = `You Pressed: Space Bar `;
	} else {
		displayValue.innerText = `You Pressed: ${e.key}`;
	}
	displayCode.innerText = `Key Value: ${e.code}`;
	displayKeyCode.innerText = `Key Code: ${e.keyCode}`;
};

window.addEventListener('keydown', getKeyCode);