var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-screen");
var openingPg = document.querySelector("#opening-page");
var questionsPg = document.querySelector("#questions-page");
var highscoresBtn = document.querySelector("#highscores");
var viewHighscoresPg = document.querySelector("#view-highscores-page");
var submitHighscoresPg = document.querySelector("#submit-highscores-page");
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
var questions = [
  {
      title: "Commonly used data types DO NOT include?",
      choices: ["Strings", "Boolean", "Alerts", "Numbers"],
      answer: "Alerts"
  },
  {
      title: "The condition in an if/else statement is enclosed with ____.",
      choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      answer: "Curly Brackets"
  },
  {
      title: "Arrays in JavaScript can be used to store ___.",
      choices: ["Numbers and strings", "Other Arrays", "Boolean", "All of the above"],
      answer: "All of the above"
  },
  {
      title: "String values must be enclosed within___ when being assigned to variables",
      choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
      answer: "Quotes"
  },
  {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:", 
      choices: ["JavaScript", "Terminal/Bash", "For loops","Console.log"],
      answer: "Console.log"
  },
];

// Timer that counts down from 100
function countdown() {
    var timeLeft = 100;

 questionEl.textContent = questions[0].title;
  //  questionEl.textContent = questions[0].choices;
     //questionEl.textContent = questions[0].answer;
     startPage.classList.add("hide");
    questionsPg.classList.add("show");
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
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

//startBtn.onclick = countdown;

//function runBuddy(params) {
 //for (let index = 0; index < array.length; index++) { }}

   



startBtn.addEventListener("click", function() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
  // target question card and change the css to show display block 
  //questionsPg
  questionsPg.setAttribute("style", "display: block;");

  // the start page will be hidden
 // startPage
 startPage.setAttribute("style", "display: none;");
 submitHighscoresPg.setAttribute("style", "display:none;");

countdown();

//runBuddy(); 


  // questions();
});
