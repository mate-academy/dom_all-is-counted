'use strict';
 
const container = document.querySelector('.container');
let click = sessionStorage.getItem('click') || container.textContent || 0;
const data = () => {
   container.textContent = `${click}`;
  };
data();
window.addEventListener('click', () => {
  click++;
  data();
  sessionStorage.setItem('click', `${click}`);
  });
