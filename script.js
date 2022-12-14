/* 
  Generate a random number
  When user click in the button, capture the input data
  If the attempt is equal an the random number
    Place the result in the screen
    If the user clicks in the button
      Start over
  If the attempt is different from the random number
    Place the paragraph write "incorrect" in the screen
*/
let randomNumber = Math.round(Math.random() * 10);

let checkResultButton = document.querySelector('#try');

let attemptsToWin = 0;

function clearPreviousGame() {
  randomNumber = Math.round(Math.random() * 10);
  checkResultButton = document.querySelector('#try');
  attemptsToWin = 0;
}

function tryAttempt() {
  const attemptOfTheUser = document.querySelector('#attempt').value;
  checkResult(attemptOfTheUser);
}

function checkResult(attempt) {
  attemptsToWin++;

  const playerWin = attempt == randomNumber ? showResult() : showFailure();
}

function showResult() {
  const displayInMain = document.querySelector('main');

  displayInMain.innerHTML = `
    <h2>You got it right in ${attemptsToWin} attempts</h2>
    <button id="play-again" onclick="playAgain()">Play Again</button>
  `;
}

function showFailure() {
  let inputParent = document.querySelector('form');
  inputParent.reset();

  const elementFail = document.querySelector('#when-fail');

  elementFail.innerHTML = `
    <p class="incorrect">You failed, try again</p>
  `;
}

const playAgainButton = document.querySelector('#play-again');

function playAgain() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <h2>Guess Game</h2>
  <p>Guess the number between 0 and 10</p>
  <form class="container">
    <input type="number" placeholder="5" id="attempt" />
    <button id="try" type="button" onclick="tryAttempt()">Check Result</button>
  </form>
  <div id="when-fail"></div>
  `;

  clearPreviousGame();
}
