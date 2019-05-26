const clicker = document.querySelector('.counter');
const storage = window.sessionStorage;
let counter = storage.getItem('clicks') || 0;

function clicks() {
  counter++;
  saveClicks()
}

function saveClicks() {
  storage.setItem('clicks', `${counter}`);
  clicker.innerHTML = counter;
}

document.body.addEventListener('click', clicks);
saveClicks();
