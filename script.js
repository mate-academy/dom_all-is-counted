function main () {
  const counterHTML = document.querySelector('#count');
  let counter = sessionStorage.getItem('count');

  if(!counter) {
    counter = 0;
  }

  counterHTML.innerHTML = counter;

  document.querySelector('html').addEventListener('click', () => {
    counter++;
    counterHTML.innerText = counter;
  });

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('count', counter);
  });

  document.querySelector('button').addEventListener('click', () => {
    counterHTML.innerText = counter = -1;
  });
}

window.addEventListener('load', main);