const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let hr = 0;
let min = 0;
let sec = 0;
let mSec = 0;
let tm = 0;

function updateTimerText() {
  $("#timer").text(`${hr}:${min}:${sec}:${mSec}`);
}

function eventStart() {
  if (tm > 0) return;

  tm = setInterval(count, 100);
  
   startButton.disabled = true;
   stopButton.disabled = false;
   resetButton.disabled = true;
}

function eventStop() {
  if (tm > 0) {
    clearInterval(tm);
    tm = 0;
  }
   startButton.disabled = false;
   stopButton.disabled = true;
   resetButton.disabled = false;
}

function eventReset() {
  if (tm > 0) return;

  hr = 0;
  min = 0;
  sec = 0;
  mSec = 0;

  updateTimerText();
  
   startButton.disabled = false;
   stopButton.disabled = true;
   resetButton.disabled = true;
}

function count() {
  mSec++;
  if (mSec >= 10) {
    sec++;
    mSec = 0;
  }
  if (sec >= 60) {
    min++;
    sec = 0;
  }
  if (min >= 60) {
    hr++;
    min = 0;
  }
  updateTimerText();
}