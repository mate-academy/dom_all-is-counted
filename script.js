'use strict';

const clickCounter = document.querySelector('#counter');
let counter = sessionStorage.getItem('clickCounter') || 0;

const renderCount = place => place.textContent = counter;


renderCount(clickCounter);

document.addEventListener('click', () => {
  counter++;
  renderCount(clickCounter);
})

window.addEventListener('unload', () => {
  sessionStorage.setItem('clickCounter', counter.toString())
})
