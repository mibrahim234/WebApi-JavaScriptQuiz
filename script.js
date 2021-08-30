// We access the <body> element by using document.body
var body = document.body;

//coding quiz challenge 
// try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by ten seconds!
// blue start quiz button, time on right corner, scores on left corner 

var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
body.appendChild(h1El);

var h2El = document.createElement('h2');
h2El.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h2El);