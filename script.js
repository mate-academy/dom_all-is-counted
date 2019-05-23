function main () {
  const counterHTML = document.querySelector('#count');
  let counter = sessionStorage.getItem('count');

  if(!counter) {
    counter = 0;
  }

  render(counterHTML, counter);

  document.querySelector('html').addEventListener('click', () => {
    counter++;
    render(counterHTML, counter);
  });

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('count', counter);
  });

  document.querySelector('button').addEventListener('click', () => {
    counterHTML.innerText = counter = -1;
  });
}

window.addEventListener('load', main);

function render (container, count) {
  container.innerText = count;
}
