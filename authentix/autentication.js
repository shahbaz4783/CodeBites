const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginToggle = document.getElementById('loginToggle');
const signupToggle = document.getElementById('signupToggle');

document.addEventListener('DOMContentLoaded', function () {
	loginForm.style.display = 'block';
	signupForm.style.display = 'none';

	loginToggle.addEventListener('click', function () {
		loginForm.style.display = 'block';
		signupForm.style.display = 'none';
	});

	signupToggle.addEventListener('click', function () {
		loginForm.style.display = 'none';
		signupForm.style.display = 'block';
	});
});

// Login form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the form input values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    // Retrieve the stored user credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (email === storedEmail && password === storedPassword) {
      // Login successful
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      // Incorrect credentials
      alert('Incorrect email or password. Please try again.');
    }
  });
  
  
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get the form input values
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    // Store the form data in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    // Toggle to the login form after successful signup
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  });
  