const body = document.querySelector('body');
const span = document.querySelector('span');
const storage = window.sessionStorage;

body.addEventListener('click', clicked);

let counter = storage.getItem('counter') || 0;
addCounter(span);

function clicked() {
  counter ++;
  addCounter(span);
  storage.setItem('counter', counter);
}

function addCounter (item) {
  item.textContent = counter;
}
