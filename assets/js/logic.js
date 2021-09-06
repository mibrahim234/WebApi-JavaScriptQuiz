let timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var highscoresBtn = document.querySelector("#highscores");
var openingPg = document.querySelector("#opening-page");
var questionsPg = document.querySelector("#questions-page");
var submitHighscoresPg = document.querySelector("#submit-highscores-page");
var viewHighscoresPg = document.querySelector("#view-highscores-page");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var continueBtn = document.querySelector("#continue");
var finalScoreEl = document.querySelector("#finalscore");
var submitBtn = document.querySelector("#submit");
var userInitials = document.querySelector("#inputInitials");
var initialsEl = document.querySelector("#initials");
var goBackBtn = document.querySelector("go-back");
var clearBtn = document.querySelector("#clear-highscores");
var currentQuestionIndex = 0;
var score = 0;
var time = (questions.length * 10) + 1;
var timerInterval = 0;

// logic
function startTimer() {
    timerInterval = setInterval(function() {
        time--;
       // timerInterval.textContent = "Time: " + time;
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

function clear () {
    window.localStorage.clear();
    initialsEl.innerHTML = "";
}

function startQuestions () {
    startTimer();
    openingPg.classList.add("hide");
    questionsPg.classList.remove("hide");
    getQuestions();
}

// launch functions and event listeners
startBtn.addEventListener("click", startQuestions);
highscoresBtn.addEventListener("click", viewHighscores);
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (userInitials.value === "") {
        alert("Initials Cannot Be Blank!");
        return;
    }
    submitHighscores()
})
