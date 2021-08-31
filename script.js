// We access the <body> element by using document.body
var body = document.body;


// blue start quiz button, time on right corner, scores on left corner 

var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(h1El);

var h2El = document.createElement('h2');
h2El.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h2El);

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

// Timer that counts down from 5
function countdown() {
    var timeLeft = 75;

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

startBtn.onclick = countdown;
