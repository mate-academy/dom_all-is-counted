let counter = sessionStorage.getItem('counter') || 0;
let counterLine = document.getElementsByClassName('counterLine')[0];
render(counterLine,  counter);

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', (event)=> {
    const element = event.target;
    ++counter;
    sessionStorage.setItem('counter', counter);
    render(counterLine,  counter);
  });
});

function render(container, counter) {
  container.innerHTML = counter;
}
  
counterLine.style.cssText = newFunction();

function newFunction() {
  return "borderRadius: 10px; \
    background-color: red; \
    border: 3px solid green; \
    right: 20px; \
    top: 10px; \
    color: yellow; \
    font-size: 50px; \
    height: 60px; \
    width: 100px; \
    text-align: center; \
    right: '20px';\
    position: absolute; \
    border-radius: 15px; \
    "
}
