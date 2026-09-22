'use strict';

const calcNumberToGuess = function (faixa) {
  return Math.trunc(Math.random() * faixa + 1);
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let numberToGuess = calcNumberToGuess(20);
console.log(numberToGuess);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number selected!!!');
  } else if (guess === numberToGuess) {
    document.querySelector('.number').textContent = guess;
    displayMessage('🎉 Correct Number ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numberToGuess) {
    if (score >= 1) {
      displayMessage(guess > numberToGuess ? '📈 Too High!' : '📉 Too Low');
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost the Game';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = '20';
  numberToGuess = calcNumberToGuess(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
