let energy = 10;
let trys = 5;
let chalkBonus = 0;

function updateStats() {
    document.getElementById('energy').textContent = energy;
    document.getElementById('sendtime').textContent = trys;
}

function rusten() {
    energy++;
    updateStats();
}

// Chatgpt (alleen gebruikt voor het herladen voor de pagina)
// Prompt: ik wil in de functie pogingenOp toevoegen dat de pagina na 5 seconden wordt herladen.
function pogingenOp() {
    if (trys == 0) {
        document.querySelector('#message').textContent = ('Thats enough for today... Mabye tomorrow.');
        setTimeout(() => location.reload(), 19000);
    }
}

function chalkUp() {
    chalkBonus = 1;
    document.querySelector('#message').textContent = ("All chalked up! Next try should be the one!")
}

function gehaaldOfNiet() {
    const sendNummer = Math.ceil(Math.random()*4)
    console.log(sendNummer)
    if (sendNummer + chalkBonus >= 4) {
        soudainSeulSend();
        document.querySelector('#message').textContent = ("YEAHHH!! I finaly did it!");
    } else {
        soudainSeulFail();
        document.querySelector('#message').textContent = ("That was a good try! I'll get it next time!");
        if (trys === 0) {
            pogingenOp();
        }
    }

    chalkBonus = 0;
}

function send() {
    if (energy >= 10) {
        trys--
        energy = energy -10
        gehaaldOfNiet()
        updateStats()
    } else {
        document.querySelector('#message').textContent = ("I am a little bit too tired to try Soudain Seul right now... Ill need 10 energy points!");
    }
}

// Chatgpt
// Prompt: kan je een video toevoegen die je pas ziet wanneer er op een knop gedrukt wordt? Deze video moet het volledige scherm vullen en ook weer verdwijnen zodra deze afgespeeld is 
function soudainSeulSend() {
    const videoContainer = document.createElement('div');
    videoContainer.id = 'fullscreen-video-container';

    const video = document.createElement('video');
    video.src = 'MP4/SoudainSeulSend.mp4';
    video.autoplay = true;

    video.addEventListener('ended', function() {
        document.body.removeChild(videoContainer);
    });

    videoContainer.appendChild(video); 
    document.body.appendChild(videoContainer);
}

function soudainSeulFail() {
    const videoContainer = document.createElement('div');
    videoContainer.id = 'fullscreen-video-container';

    const video = document.createElement('video');
    video.src = 'MP4/SoudainSeulFail.mp4';
    video.autoplay = true;

    video.addEventListener('ended', function() {
        document.body.removeChild(videoContainer);
    });

    videoContainer.appendChild(video); 
    document.body.appendChild(videoContainer); 
}


document.getElementById('rusten').addEventListener('click', rusten);
document.getElementById('senden').addEventListener('click', send);
document.getElementById('chalkUp').addEventListener('click', chalkUp)