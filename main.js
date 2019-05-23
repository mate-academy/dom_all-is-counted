'use strict';

window.addEventListener('load', main);
document.addEventListener('click', numberIncrement);

const number = document.querySelector('.count');

function main(){
  numberSet();
}

function numberIncrement() {
  sessionStorage.count++;
  number.textContent = sessionStorage.count;
}

function numberSet() {
  if (!sessionStorage.count) {
    sessionStorage.count = 0;
  }
  number.textContent = sessionStorage.count;
}
