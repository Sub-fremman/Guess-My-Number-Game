'use strict';

// Randomize secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  changeScore(score);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.guess').value = '';
};

// When player clicks the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no number was inputed
  if (!guess) {
    displayMessage('❌ Not number');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').style.fontSize = '3rem';

    // player highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when player losses
  } else if (guess !== secretNumber) {
    // guess too high or too low
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too low');
      score--;
      changeScore(score);

      // game over
    } else {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = '#' + randomColor;
      displayMessage('😭 Game Over!');
      document.querySelector('.message').style.fontSize = '4rem';
      document.querySelector('.score').textContent = 0;
      // document.querySelector('body').style.backgroundColor = '#db1717';
      document.querySelector('body').style.backgroundColor = randomColor;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

// Resetting the game by clicking the Again button
document.querySelector('.again').addEventListener('click', resetGame);
// secretNumber = Math.trunc(Math.random() * 20) + 1;
// score = 20;

// changeScore(score);
// document.querySelector('.number').textContent = '?';
// displayMessage('Start guessing...');
// document.querySelector('body').style.backgroundColor = '#222';
// document.querySelector('.number').style.width = '15rem';
// document.querySelector('.guess').value = '';

// for (let i = 3; i <= 6; i++) {
//   console.log(i);
// }

// // OUTPUT: 3, 4, 5, 6

// let x = 1;
// while (x < 4) {
//   console.log(x);
//   x++;
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }
