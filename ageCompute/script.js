// Get the required elements from the DOM
const getDateInput = document.getElementById('birthday');
const getBtn = document.getElementById('calculate');
const getResult = document.getElementById('result');
const today = new Date();

// Function to calculate age
const calculateAge = () => {
  const inputDate = Date.parse(getDateInput.value);

  if (getDateInput.value === '') {
    getResult.innerText = 'Please Enter Date of Birth';
  } else if (isNaN(inputDate)) {
    getResult.innerText = 'Invalid Date';
  } else if (inputDate > Date.now()) {
    getResult.innerText = 'Invalid Date (Future Date)';
  } else {
    const selectedDate = new Date(getDateInput.value);
    const yearsDiff = today.getFullYear() - selectedDate.getFullYear();
    const monthsDiff = today.getMonth() - selectedDate.getMonth();
    const daysDiff = today.getDate() - selectedDate.getDate();

    let years = yearsDiff;
    let months = monthsDiff;
    let days = daysDiff;

    // Adjust negative months and days
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      years--;
      months += 12;
      if (daysDiff < 0) {
        const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = prevMonthLastDay - selectedDate.getDate() + today.getDate();
      }
    }

    let ageString = 'You are';

    if (years > 0) {
      ageString += ` ${years} ${years === 1 ? 'year,' : 'years,'}`;
    }

    if (months > 0) {
      ageString += ` ${months} ${months === 1 ? 'month,' : 'months,'}`;
    }

    if (days > 0) {
      ageString += ` ${days} ${days === 1 ? 'day' : 'days'} old`;
    }

    if (years === 0 && months === 0 && days === 0) {
      ageString = 'You were born Today!';
    } else if (months === 0 && days === 0) {
      ageString = 'Happy Birthday! You were born today!\n';
      ageString += `You turned ${years} ${years <= 1 ? 'year' : 'years'} today`;
    }

    getResult.innerText = ageString;
  }
};

// Add event listener to the "Calculate" button
getBtn.addEventListener('click', calculateAge);
