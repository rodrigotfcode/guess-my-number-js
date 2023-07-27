'use strict';

let secretNumber = Math.trunc(Math.random() * 3) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.result').textContent = 'Correct guess!!!'
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '✨ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.result').textContent = 'Guess my number!'
      document.querySelector('body').style.backgroundColor = '#F2CB05';
    } else {
      document.querySelector('.message').textContent = '❗ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#C92724';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🛎️ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.result').textContent = 'Guess my number!'
      document.querySelector('body').style.backgroundColor = '#F2CB05';
    } else {
      document.querySelector('.message').textContent = '❗ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#C92724';
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 3) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.result').textContent = 'Guess my number!'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});