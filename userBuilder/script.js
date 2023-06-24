const getBtn = document.getElementById('request');
const getImageBox = document.querySelector('.image');
const getName = document.querySelector('.name');
const getAge = document.querySelector('.age-value');
const getGender = document.querySelector('.gender-value');
const getEmail = document.querySelector('.email');
const getCountry = document.querySelector('.country');
const getPhone = document.querySelector('.phone');

const fetchUser = () => {
    fetch('https://randomuser.me/api/')
    
    .then((response) => {
        return response.json();
    })
    .then((data)=> {
        displayUser(data.results[0])
    })
}

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

    if (user.gender === 'male'){
        document.body.style.backgroundColor = '#68D8D6';
    } else {
        document.body.style.backgroundColor = '#0077b6';
    }
}

getBtn.addEventListener('click', fetchUser)
document.addEventListener('DOMContentLoaded', fetchUser);