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

function clearInput() {
  const inputParent = document.querySelector('form');
  inputParent.reset();
}

function clearPreviousGame() {
  randomNumber = Math.round(Math.random() * 10);
  checkResultButton = document.querySelector('#try');
  attemptsToWin = 0;
}

const tryAttemptButton = document.querySelector('#try');
tryAttemptButton.addEventListener('click', checkAttempt);

function checkAttempt() {
  const attemptOfTheUser = document.querySelector('#attempt').value;

  attemptsToWin++;

  const playerWin = attemptOfTheUser == randomNumber;

  if (playerWin) {
    toggleScreen('result-screen');
  } else {
    showFailure();
    clearInput();
  }
}

function showFailure() {
  const elementFail = document.querySelector('#when-fail');

  elementFail.innerHTML = `
    <p class="incorrect">You failed, try again</p>
  `;
}

const playAgainButton = document.querySelector('#play-again');

function playAgain() {
  toggleScreen('game-screen');

  clearPreviousGame();
}

function toggleScreen(screen) {
  const main = document.querySelector('main');

  const resultTitle = document.querySelector('#resultTitle');

  const gameScreen = screen == 'game-screen';

  if (gameScreen) {
    main.classList.remove('result-screen');
    main.classList.add('game-screen');
  } else {
    main.classList.add('result-screen');
    main.classList.remove('game-screen');

    resultTitle.innerHTML = `You got it right in ${attemptsToWin} attempts`;

    clearInput();
  }
}
