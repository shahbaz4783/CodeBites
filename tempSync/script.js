const getCelsiusInput = document.getElementById('celsius');
const getFahrenheitInput = document.getElementById('fahrenheit');
const getKelvinInput = document.getElementById('kelvin');
const inputs = document.querySelectorAll('input[type="number"]');


const convert = (e) => {
    const currentValue = +e.target.value;

    switch (e.target.name) {
        case 'celsius':
            getFahrenheitInput.value = ((currentValue * 9/5) + 32).toFixed(2);
            getKelvinInput.value = (currentValue + 273.15).toFixed(2);
            break;
        case 'fahrenheit':
            getCelsiusInput.value = ((currentValue - 32) * 5/9).toFixed(2);
            getKelvinInput.value = ((currentValue - 32) * 5/9 + 273.15).toFixed(2);
            break;
        case 'kelvin':
            getCelsiusInput.value = (currentValue - 273.15).toFixed(2);
            getFahrenheitInput.value = ((currentValue - 273.15) * 9/5 + 32).toFixed(2);
            break;

        default:
            break;
    }
}


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', convert)
}