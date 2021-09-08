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
var choices1 = document.querySelector(".choices1");
var continueBtn = document.querySelector("#continue");
var finalScoreEl = document.querySelector("#finalscore");
var submitBtn = document.querySelector("#submit");
var userInitials = document.querySelector("#inputInitials");
var initialsEl = document.querySelector("#initials");
var goBackBtn = document.querySelector("#go-back");
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
// when time hits 0 it alerts the console 
// when question is wrong timer must go down by 5
function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;

      } else {
        timerEl.textContent = '';
        alert("Time's Up!");
        clearInterval(timeInterval);
      }
    }, 1000);
  }


// start button event listener 
startBtn.addEventListener("click", function() {
 for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
  
  

 // shows answers 
 questionEl.textContent = questions[currentQuestionIndex].title;
 for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) { 
var button = document.createElement("button");
button.textContent = questions[currentQuestionIndex].choices[i];
choicesEl.appendChild(button); 


// the start page will be hidden
 // submit highscores will be hidden
 startPage.setAttribute("style", "display: none;");
 submitHighscoresPg.setAttribute("style", "display:none;");
 }
 // run the countdown function 
countdown();


});

// when the continue button is clicked the new question shows up
// fix continue button so it shows up in center 
// hide continue button until first question shows up
continueBtn.addEventListener("click", function() {
  currentQuestionIndex++;
 questionEl.textContent = questions[currentQuestionIndex].title;

 questionEl.textContent = questions[currentQuestionIndex].title;
 for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) { 
 var button = document.createElement("button");
 button.textContent = questions[currentQuestionIndex].choices[i];
 choices1.appendChild(button); 
 }


  //questions();
});