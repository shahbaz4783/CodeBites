const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = (e) => {
    const colors = [
        'red',
        'blue',
        'green',
        'pink',
        'black',
        'orange',
        'purple',
        'white',
        'gray'
    ];

    const latestResult = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
    document.querySelector('p').innerHTML = latestResult;

    if (colors.includes(latestResult)) {
        document.body.style.backgroundColor = latestResult;
    } else {
        alert('Please say a color name.');
    }
};

rec.start();