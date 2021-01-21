'use strict';
//MY PROJECT
//Random number in secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Functions for DOM
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

const displayGuess = function (message) {
  document.querySelector('.guess').value = message;
};

const displayBody = function (message) {
  document.querySelector('body').textContent = message;
};

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

//Button (Check)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //NO NUMBER ENTERED
  if (!guess) {
    displayMessage('No number!!');
  }

  //When player WINS!!
  else if (guess === secretNumber) {
    displayMessage(' 🤩CORRECT NUMBER');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When guess is not equal to secret number high/low
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 High!!' : ' 📉 Low!!');
      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('😭 You lost the game');
      displayScore(0);
    }
  }
});

//Button (Again)
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('🔢 Start guessing..');
  displayScore(score);
  displayNumber('?');
  displayGuess('');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
