const getBtn = document.getElementById('request');
const getImageBox = document.querySelector('.image');
const getName = document.querySelector('.name');
const getAge = document.querySelector('.age-value');
const getGender = document.querySelector('.gender-value');
const getEmail = document.querySelector('.email');
const getCountry = document.querySelector('.country');
const getPhone = document.querySelector('.phone');

const fetchUser = () => {
	showSpinner();
	hideCard();
	fetch('https://randomuser.me/api/')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			hideSpinner();
			showCard();
			displayUser(data.results[0]);
		});
};

const displayUser = (user) => {
	const fullName = `${user.name.first} ${user.name.last}`;
	const age = user.dob.age;
	const gender = user.gender;
	const image = user.picture.large;
	const country = user.location.country;
	const emailID = user.email;
	const phone = user.phone;

	getName.innerHTML = fullName;
	getAge.innerHTML = age;
	getGender.innerHTML = gender;
	getImageBox.src = image;
	getCountry.innerHTML = country;
	getEmail.innerHTML = emailID;
	getPhone.innerHTML = phone;
};

// Spinner
const showSpinner = () => {
	document.querySelector('.loading').style.display = 'flex';
};
const hideSpinner = () => {
	document.querySelector('.loading').style.display = 'none';
};

// card
const showCard = () => {
	document.querySelector('.card').style.display = 'block';
};
const hideCard = () => {
	document.querySelector('.card').style.display = 'none';
};

getBtn.addEventListener('click', fetchUser);
document.addEventListener('DOMContentLoaded', fetchUser);