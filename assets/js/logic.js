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
    submitHighscores();
}

function startQuestions () {
    startTimer();
    openingPg.classList.add("hide");
    questionsPg.classList.remove("hide");
    getQuestions();
}

// launch functions and event listeners
startBtn.addEventListener("click", startQuestions);
