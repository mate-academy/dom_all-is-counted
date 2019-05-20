const html = document.querySelector('html');
let counter = sessionStorage.getItem('count') ? sessionStorage.getItem('count') : 0;
const htmlCount = document.createElement('div')

html.addEventListener('click', () => {
  counter++
  sessionStorage.setItem('count', `${counter}`)
  console.log(counter)
  htmlCount.innerHTML = `${counter}`
  document.querySelector('body').append(htmlCount)
});

