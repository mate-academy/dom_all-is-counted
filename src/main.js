const amountClick = document.querySelector('.amountClick');
const storage = window.localStorage;
let counter = storage.getItem('count') || 0;

function count() {
  counter++;
  saveCounter();
}

function saveCounter() {
  storage.setItem('count', `${counter}`)
  amountClick.innerHTML = counter;
}

document.body.addEventListener('click', count);
saveCounter()