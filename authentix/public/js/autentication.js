const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

document.addEventListener('DOMContentLoaded', function () {
	const loginToggle = document.getElementById('loginToggle');
	const signupToggle = document.getElementById('signupToggle');

	loginForm.style.display = 'none';
	signupForm.style.display = 'block';

	loginToggle.addEventListener('click', function () {
		loginForm.style.display = 'block';
		signupForm.style.display = 'none';
	});

	signupToggle.addEventListener('click', function () {
		loginForm.style.display = 'none';
		signupForm.style.display = 'block';
	});
});

// eg

let form = document.querySelector('#myForm');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let LSData = JSON.parse(localStorage.getItem('sign-up')) || [];

form.addEventListener('submit', function (a) {
	a.preventDefault();

	let obj = {
		name: name.value,
		id: Math.random() * 1000 + 1 + name.value,
		email: email.value,
		password: password.value,
	};

	for (let i = 0; i < LSData.length; i++) {
		if (email.value != '' && LSData[i].email === email.value) {
			return alert('Email already exist!');
		}
	}
	if (email.value == '' && password.value == '')
		alert('Please enter valid email');
	if (email.value != '' && password.value != '') {
		alert('Account created successfully');
		LSData.push(obj);
		localStorage.setItem('sign-up', JSON.stringify(LSData));
	}
});

//my

signupForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const username = document.getElementById('signupUsername').value;
	const email = document.getElementById('signupEmail').value;
	const password = document.getElementById('signupPassword').value;

	let LSData = JSON.parse(localStorage.getItem('formData')) || [];


		let obj = {
			name: name.value,
			id: Math.random() * 1000 + 1 + name.value,
			email: email.value,
			password: password.value,
		};

		for (let i = 0; i < LSData.length; i++) {
			if (email.value != '' && LSData[i].email === email.value) {
				return alert('Email already exist!');
			}
		}
		if (email.value == '' && password.value == '')
			alert('Please enter valid email');
		if (email.value != '' && password.value != '') {
			alert('Account created successfully');
			LSData.push(obj);
			localStorage.setItem('sign-up', JSON.stringify(LSData));
		}
	
});

loginForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const email = document.getElementById('loginEmail').value;
	const password = document.getElementById('loginPassword').value;
	const storedEmail = localStorage.getItem('email');
	const storedPassword = localStorage.getItem('password');

	if (email === storedEmail && password === storedPassword) {
		alert('Login successful!');
		window.location.href = '/authentix/index.html';
	} else {
		alert('Incorrect email or password. Please try again.');
	}
});
