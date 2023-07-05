const voices = document.getElementById('voices');

const synth = window.speechSynthesis;
let allVoice;

const addVoices = () => {
      allVoice = synth.getVoices();

    for (let i = 0; i < allVoice.length; i++){
        const options = document.createElement('option');
        options.textContent = `${allVoice[i].name} - ${allVoice[i].lang}`;

        if (allVoice[i].default){
            options.textContent = ' - Default'
        }

        options.setAttribute('data-lang', allVoice[i].lang);
        options.setAttribute('data-name', allVoice[i].name);
        voices.append(options)
    }

}

const form = document.getElementById('form');
const textInput = document.getElementById('text-input')

const onSubmit = (e) => {
    e.preventDefault();

    const utterance = new SpeechSynthesisUtterance(textInput.value);

    const selectedOption = voices.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < allVoice.length; i++){
        if (allVoice[i].name === selectedOption)
        utterance.voice = allVoice[i];
    }

    synth.speak(utterance);
}

addVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
}

form.addEventListener('submit', onSubmit)