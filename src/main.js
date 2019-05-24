'use strict';

window.addEventListener('load', main);

const countPlace = document.querySelector('.count');
const COUNT = 'counter';

function main(){
  numberSet();
  numberIncrement();
}

function numberIncrement() {
  let incrementedNumber = sessionStorage.getItem(COUNT);

  document.addEventListener('click', () => {
    incrementedNumber++;
    sessionStorage.setItem(COUNT, incrementedNumber);
    countPlace.textContent = incrementedNumber;
  });
}

function numberSet() {
  if (!sessionStorage.getItem(COUNT)) {
    sessionStorage.setItem(COUNT, 0);
  }
    countPlace.textContent = sessionStorage.getItem(COUNT);

}
