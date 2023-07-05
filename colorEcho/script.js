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
    ]

    for (let i = e.resultIndex; i<e.results.length; i++) {

        const script = e.results[i][0].transcript.toLowercase().trim();
        document.querySelector('p').innerHTML = script;

        if (colors.includes(script)){
            document.style.backgroundColor = script;
        } else {
            alert('Please Say a Color Name')
        }
    }
}

rec.start();