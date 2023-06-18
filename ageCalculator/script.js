const getDateInput = document.getElementById('birthday');
const getBtn = document.getElementById('calculate');
const getResult = document.getElementById('result');
const today = new Date();

const getAge = () => {
	const todayInYear = today.getFullYear();
	const selectedYear = new Date(getDateInput.value).getFullYear();

	const age = todayInYear - selectedYear;
    return age;
};


const calculateAge = () => {
	if (getDateInput.value === '') {
		getResult.innerText = `Please Enter Date of Birth`;
	} else {
		getResult.innerText = `You are ${getAge()} years old`;
	}
};

getBtn.addEventListener('click', calculateAge);
