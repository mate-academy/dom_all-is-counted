const body = document.body;
const storage = sessionStorage;

let counter = storage.getItem('counter') || 0;

body.addEventListener('click', () => {
  counter++;
  storage.setItem('counter', counter);
  show()
});

function show() {
  body.innerText = counter;
};

show()
