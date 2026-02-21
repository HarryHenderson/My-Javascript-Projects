let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let mesc = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
     }
     timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function() {
        clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
        clearInterval(timerId);
        timerDisplay.innerHTML = "00 : 00 : 00";
});

function startTimer() {
    mesc++;
    if (mesc == 100) {
        mesc = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;

        }
    }

     let mescString = mesc < 10 ? `0$(mesc)` : mesc;
     let secsString = secs < 10 ? `0$(secs)` : secs;
     let minsString = mins < 10 ? `0$(mins)` : mins;
     

    timerDisplay.innerHTML = `${minsString} : 
    ${secsString} : ${mescString}`;

}