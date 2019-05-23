'use strict';
const body = document.querySelector('body');
const store = window.sessionStorage;
const output = document.querySelector('.counter')
let counter = store.getItem('counter') || 0;

function countClicks() {
    counter++
    outputNumber()
}

function outputNumber() {
    output.innerHTML = `${counter}`;
    store.setItem('number of clicks', counter);
}

body.addEventListener('click', countClicks);
outputNumber();
