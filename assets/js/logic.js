let timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var time = (questions.length * 10) + 1;
var timerInterval = 0;

// logic
function startTimer() {
    timerInterval = setInterval(function() {
        time--;
        timerInterval.textContent = "Time: " + time;
        if(time === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage () {
    alert("Time's Up!");
}
console.log(startTimer);