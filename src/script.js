'use strict';
   
const box = document.body.querySelector('.container');
const save = window.sessionStorage;
let counter = save.getItem('counter') || 0;

const count = () => {
  counter++;
  getCount();
}

const getCount = () => {
  box.innerHTML = `${counter}`;
  save.setItem('counter', counter);
}

document.body.addEventListener('click', count);
getCount();