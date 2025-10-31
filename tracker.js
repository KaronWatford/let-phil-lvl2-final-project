const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-timer');
const pauseBtn = document.getElementById('pause-timer');
const resetBtn = document.getElementById('reset-timer');

let seconds = 0;
let interval = null;

function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${secs}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

// Start Timer
startBtn.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

// Pause Timer
pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

// Reset Timer
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();
});

//Intialize Display
updateDisplay();