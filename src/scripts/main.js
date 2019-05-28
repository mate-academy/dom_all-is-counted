'use strict';

const counter = document.querySelector('.counter');
let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('count')) {
    clickCount = sessionStorage.getItem('count');
  }
  render();
});

document.addEventListener('click', function() {
  clickCount++;
  sessionStorage.setItem('count', clickCount);
  render();
});

function render() {
  counter.innerHTML = clickCount;
}
