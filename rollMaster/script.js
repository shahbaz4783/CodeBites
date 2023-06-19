// Username Gerenrate
const getUserInputBox = document.getElementById('set-username');
const getUserInput = document.getElementById('user-input');
const getUserBtn = document.getElementById('username-submit');
const game = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  const displayUsername = document.querySelector('#username');
  
  game.style.display = 'none';
  
  const handleUserInput = () => {
    getUserInputBox.style.display = 'none';
    game.style.display = 'block';

    if (getUserInput.value === ''){
      displayUsername.textContent = 'Guest';
    } else {
      displayUsername.textContent = getUserInput.value;
    }
  };
  
  getUserBtn.addEventListener('click', handleUserInput);
  
  getUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleUserInput();
    }
  });
});


let randomNum1;
let randomImg1 = '/rollMaster/images/dice' + randomNum1 + '.png';

let randomNum2;
let randomImg2 = '/rollMaster/images/dice' + randomNum2 + '.png';

const rollDice = () => {
	// Random Number Generator for Player
	randomNum1 = Math.floor(Math.random() * 6) + 1;
	randomImg1 = '/rollMaster/images/dice' + randomNum1 + '.png';
	document.querySelectorAll('img')[0].setAttribute('src', randomImg1);

	// Random Number Generator for Computer
	randomNum2 = Math.floor(Math.random() * 6) + 1;
	randomImg2 = '/rollMaster/images/dice' + randomNum2 + '.png';
	document.querySelectorAll('img')[1].setAttribute('src', randomImg2);

	if (randomNum1 > randomNum2) {
		document.querySelector('.result').innerHTML = 'You Won!';
		document.querySelector('.img1').style.cssText =
			'border: 5px solid green; border-radius: 20px';
		document.querySelector('.img2').style.cssText = 'none';
	} else if (randomNum1 < randomNum2) {
		document.querySelector('.result').innerHTML = 'Computer Won';
		document.querySelector('.img2').style.cssText =
			'border: 5px solid green; border-radius: 20px';
		document.querySelector('.img1').style.cssText = 'none';
	} else {
		document.querySelector('.result').innerHTML = "It's a Tie!";
		document.querySelectorAll('.img1, .img2').forEach(function (img) {
			img.style.cssText = 'border: 5px solid pink; border-radius: 20px';
		});
	}
};

document.querySelector('.btn').addEventListener('click', rollDice);
window.addEventListener('keydown', (e) => {
	if (e.key === ' ' && game.style.display === 'block'){
		rollDice();
	}
})


