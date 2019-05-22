let counter;

if (sessionStorage.getItem('click')) {
  counter = sessionStorage.getItem('click');
} else {
  counter = 0;
}

document.querySelector('.click').innerHTML = counter;
window.addEventListener('click', function(){
  counter++;
  document.querySelector('.click').innerHTML = counter;
});

window.onunload = () => sessionStorage.setItem('click', counter);