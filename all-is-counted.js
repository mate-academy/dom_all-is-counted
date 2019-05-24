'use strict';
function main() {
  const counterEl = document.getElementById('counter');
  const store = window.sessionStorage;

  let counter = store.getItem('counter') || 0;

  function countClicks() {
    counter++;
    counterElNumber();
  }

  function counterElNumber() {
    counterEl.textContent = counter;
    store.setItem('counter', counter);
  }

  document.addEventListener('click', countClicks);
  counterElNumber();
}

window.addEventListener('load', main);
