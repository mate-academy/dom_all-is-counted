const click = document.querySelector('.counted');
const clear = document.querySelector('.clear');
let value = +sessionStorage.getItem('click') || 0;

document.addEventListener('load', () => {
  click.innerHTML = value;
})

document.addEventListener('click', () => {
  value += 1;
  click.innerHTML = value;
  sessionStorage.setItem('click', `${value}`);
});

clear.addEventListener('click', (event) => {
  event.preventDefault();
  value = 0;
});




