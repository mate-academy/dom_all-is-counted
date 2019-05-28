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

window.onunload = () => sessionStorage.setItem('click', counter);