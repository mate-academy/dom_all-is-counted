let counter = sessionStorage.getItem('counter') || 0;
let counterLine = document.getElementsByClassName('counterLine')[0];
render(counterLine,  counter);

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', (event)=> {
    ++counter;
    sessionStorage.setItem('counter', counter);
    render(counterLine,  counter);
  });
  counterLine.classList.add('counter');
});

function render(container, counter) {
  container.innerHTML = counter;
}
  