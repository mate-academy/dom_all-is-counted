const container = document.querySelector('.counter');
const storage = window.sessionStorage;

let counter = storage.getItem('counter') || 0;
container.innerHTML = counter;

container.addEventListener('click', () => {
  counter++;
  container.innerHTML = counter;
  storage.setItem('counter', counter);
});
