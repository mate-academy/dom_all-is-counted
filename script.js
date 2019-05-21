const html = document.querySelector('html');
let counter = sessionStorage.getItem('count');
if(!counter) {
  counter = 0;
}
const htmlCount = document.createElement('div');

html.addEventListener('click', () => {
  counter++;
  htmlCount.innerHTML = `${counter}`;
  document.querySelector('body').prepend(htmlCount);
});

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('count', `${counter}`);
});

document.querySelector('button').addEventListener('click', () => {
  counter = 0;
});
