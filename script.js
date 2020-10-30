'use strict';

console.log('funguju');

/*const button = document.querySelectorAll('.butt-hra');

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
});*/

let move = 'circle';
const fieldElements = document.querySelectorAll('.butt-hra');
const currentPlayerImg = document.querySelector('#currentPlayerImg');

fieldElements.forEach((fieldElement) => {
  fieldElement.addEventListener('click', () => {
    fieldElement.classList.add(`board__field--${move}`);
    currentPlayerImg.classList.remove(`current-player__symbol--${move}`);
    if (move === 'circle') {
      move = 'cross';
    } else {
      move = 'circle';
    }
    currentPlayerImg.classList.add(`current-player__symbol--${move}`);
    fieldElement.setAttribute('disabled', true);
  });
});

const boardSize = 10; // 10x10

const getPosition = (field) => {
  let i = 0;
  while (i < fieldElements.length) {
    if (field === fieldElements[i]) {
      break;
    }
    i++;
  }

  return {
    row: Math.floor(fieldIndex / 10),
    column: fieldIndex % 10,
  };
};

const getField = (row, column) => button[row * 10 + column];

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= 5) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= 5) {
    return true;
  }

  return false;
};
