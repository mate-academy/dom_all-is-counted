'use strict';

const counter = document.querySelector('.counter');
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
  const num = sessionStorage.getItem('count');
  console.log(num);
  if (num) {
    i = num;
  }
  counter.innerHTML = i;
});

document.addEventListener('click', function() {
  i++;
  sessionStorage.setItem('count', i);
  counter.innerHTML = i;
});
