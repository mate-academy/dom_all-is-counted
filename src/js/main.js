let counter = sessionStorage.getItem('counter') || 0;
let counterLine = document.getElementsByClassName('counterLine')[0];
console.log(counterLine);

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', (event)=> {
    const element = event.target;
    sessionStorage.setItem('counter', counter);
    ++counter;
    counterLine.innerHTML = `${counter}`;
  });
});

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
