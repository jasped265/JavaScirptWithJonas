'use strict';
//Selectiong Elements
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const currentScoreEl0 = document.getElementById('current--0');
const currentScoreEl1 = document.getElementById('current--1');
const scores = [0, 0];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Setting Functions
const setGame = () => {
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceEl.classList.add('hidden');
};

const calcDiceValue = () => {
  return Math.trunc(Math.random() * 6 + 1);
};

const togglePlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = () => {
  let diceValue = calcDiceValue();

  diceEl.src = `dice-${diceValue}.png`;

  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }

  return diceValue;
};

const resetGame = () => {
  playing = true;
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
};

setGame();

btnRoll.addEventListener('click', () => {
  if (playing) {
    let diceValue = rollDice();
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      togglePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      togglePlayer();
    }
  }
});

btnNew.addEventListener('click', resetGame);
