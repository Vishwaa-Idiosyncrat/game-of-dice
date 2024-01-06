"use strict";
// selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0ele = document.querySelector("#score--0");
const score1ele = document.querySelector("#score--1");
const diceele = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
// const current0el = document.querySelector("#current--0");
// const current1el = document.querySelector("#current--1");

// initial conditions

score0ele.textContent = 0;
score1ele.textContent = 0;
diceele.classList.add("hidden");
const scores = [0, 0];
let current_score = 0;
let activePlayer = 0;
const switchPlayer = function () {
  
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current_score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// rolling the dice

btnroll.addEventListener("click", function () {
  // generating random dice value
  const dice = Math.trunc(Math.random() * 6) + 1;
  // displaying the dice
  diceele.classList.remove("hidden");
  diceele.src = `dice-${dice}.png`;

  // rolled for 1

  if (dice !== 1) {
    // add dice val to current score
    current_score = current_score + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      current_score;
  } else {
    // switch player
    document.getElementById(`score--${activePlayer}`).textContent = current_score;
    switchPlayer();
  }
});
btnhold.addEventListener("click", function () {
  // adding current scores to scores
  scores[activePlayer] += current_score;
  console.log(scores[activePlayer]);

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // switch player
  switchPlayer();
});
