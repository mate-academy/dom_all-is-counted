function main () {
  const counterHTML = document.querySelector('#count');
  let counter = sessionStorage.getItem('count') || 0;

  render(counterHTML, counter);

  document.querySelector('html').addEventListener('click', () => {
    counter++;
    render(counterHTML, counter);
  });

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('count', counter);
  });

  document.querySelector('button').addEventListener('click', () => {
    counter = -1;
    render(counterHTML, counter);
  });
}

window.addEventListener('load', main);

function render (container, count) {
  container.innerText = count;
}
