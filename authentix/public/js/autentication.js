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


signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.username.toLowerCase() == username.toLowerCase()
        );

        if(!exist){
            formData.push({ username, email, password });
            localStorage.setItem('formData', JSON.stringify(formData));
            document.getElementById('signupForm').reset();
            document.getElementById('username').focus();
            alert("Account Created.\n\ Login NOW");
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        }
        else{
            alert("This email already exist");
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
