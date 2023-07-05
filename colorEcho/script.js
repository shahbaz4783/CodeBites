const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onstart = () => {
    document.querySelector('h2').innerHTML = 'Hearing...';
};

rec.onend = () => {
    document.querySelector('h2').innerHTML = 'Reload to Start Again';
    document.querySelector('p').innerHTML = '';

};

rec.onresult = (e) => {
    const latestResult = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
    document.querySelector('p').innerHTML = latestResult;
    
    if (latestResult === 'black'){
        document.body.style.backgroundColor = latestResult;
        document.body.style.color = 'white';
        document.querySelector('h2').style.borderColor = 'white'
    } else {
        document.body.style.backgroundColor = latestResult; 
        document.body.style.color = 'black';
        document.querySelector('h2').style.borderColor = 'black'
    }
};

rec.start();