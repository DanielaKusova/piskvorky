'use strict';

console.log('funguju');

const button = document.querySelectorAll('.butt-hra');

let currentPlayer = 'circle';
const gameArea = document.querySelector('.pole');
let currentPlayerImg = document.querySelector('#currentPlayerImg');

gameArea.addEventListener('click', (event) => {
  if (currentPlayer === 'circle') {
    event.target.disabled = true;
    event.target.className = 'board__field--circle';
    currentPlayer = 'cross';
    currentPlayerImg.src = 'cross.svg';
  } else if (currentPlayer === 'cross') {
    event.target.disabled = true;
    event.target.className = 'board__field--cross';
    currentPlayer = 'circle';
    currentPlayerImg.src = 'circle.svg';
  }
});
