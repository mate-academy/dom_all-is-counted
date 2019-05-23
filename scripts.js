'use strict';

window.addEventListener('load', main);
document.addEventListener('click', countClick);

const number = document.querySelector('#count');

function main(){
  if (!sessionStorage.count) {
    sessionStorage.count = 0;
  }
  number.textContent = sessionStorage.count;
}

function countClick() {
  sessionStorage.count++;
  number.textContent = sessionStorage.count;
}
