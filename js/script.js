const clickCounter = document.querySelector('.counted');
const clear = document.querySelector('.clear');
let value = +sessionStorage.getItem('click') || 0;

window.addEventListener('load', () => {
  clickCounter.innerHTML = value;
  clear.addEventListener('click', (event) => {
    value = -1;
  });

  document.addEventListener('click', () => {
    value += 1;
    clickCounter.innerHTML = value;
    sessionStorage.setItem('click', `${value}`);
  });
})




