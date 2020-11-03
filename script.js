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

  //---------------bonus sikme smery---------
  // Koukni sikmo nahoru doleva

  i = origin.column;
  j = origin.row;

  let inDiaLeft = 1;

  while (j > 0 && i > 0 && symbol === getSymbol(getField(j - 1, i - 1))) {
    inDiaLeft++;
    i--;
    j--;
  }
  // Koukni sikmo dolu doprava
  i = origin.column;
  j = origin.row;
  while (
    j < boardSize - 1 &&
    i < boardSize - 1 &&
    symbol === getSymbol(getField(j + 1, i + 1)) //
  ) {
    inDiaLeft++;
    i++;
    j++;
  }

  if (inDiaLeft >= 5) {
    return true;
  }

  let inDiaRight = 1;

  // Koukni sikmo nahoru doprava
  i = origin.column;
  j = origin.row;
  while (j > 0 && i > 0 && symbol === getSymbol(getField(j - 1, i + 1))) {
    inDiaRight++;
    i++;
    j--;
  }

  // Koukni sikmo dolu doleva
  i = origin.column;
  j = origin.row;
  while (
    i < boardSize - 1 &&
    j < boardSize - 1 &&
    symbol === getSymbol(getField(j + 1, i - 1)) //
  ) {
    inRow++;
    i--;
    j++;
  }

  if (inDiaRight >= 5) {
    return true;
  }
  return false;
};

fu showResult (vyhra, symbol) {
  if (vyhra) {
    if (symbol === 'cross') {
      let r = confirm(
        'Vyhrál křížek. Chcete další hru, ať mu to kolečko natře?',
      );
      if (r === true) {
        location.reload();
      }
    }
    if (symbol === 'circle') {
      let r = confirm(
        'Vyhrálo kolečko. Chcete další hru, ať mu to křížek natře?',
      );
      if (r === true) {
        location.reload();
      }
    }
  }
}
