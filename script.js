let counter = sessionStorage.getItem('click') || 0;

render('.click', counter);

window.addEventListener('click', function(){
  counter = increment(counter);
  render('.click', counter);
});

function increment(counter) {
  return ++counter;
}

function render(selector , counter) {
  document.querySelector(selector).innerHTML = counter;
}

window.addEventListener('unload', () => sessionStorage.setItem('click', counter));