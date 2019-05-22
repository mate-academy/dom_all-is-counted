'use strict';

const body = document.querySelector('body');
const storage = window.sessionStorage;

let counter = storage.getItem('counter') || 0;

const bodyClick = () => {
  counter++;
  updateCounter();
}

const updateCounter = () => {
  body.innerHTML = `${counter}`;
  storage.setItem('counter', counter);
}
body.addEventListener('click', bodyClick);
updateCounter();