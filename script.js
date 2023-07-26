'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 50;

document.querySelector('.guess').value = 15;
*/

const secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 20;
console.log(secretNumber)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '👀 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔️ Correct number!';

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '✨ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#F2CB05';
      
    } else {
      document.querySelector('.message').textContent = '❗ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#C92724'
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🛎️ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#F2CB05'
    } else {
      document.querySelector('.message').textContent = '❗ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#C92724'
    }
    
  }
});