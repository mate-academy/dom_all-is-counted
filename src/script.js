'use strict';
   
const body = document.body;
const save = window.sessionStorage;
let counter = save.getItem('counter') || 0;

const count = () => {
  counter++;
  getCount();
}

const getCount = () => {
  body.querySelector('.container').innerHTML = `${counter}`;
  save.setItem('counter', counter);
}

body.addEventListener('click', count);
getCount();