let clicks = document.querySelector('#count-clicks');
let count = +sessionStorage.getItem('click') || 0;

 window.addEventListener('load', () => {
    clicks.textContent = count;
 });

window.addEventListener('click', () => {
    count += 1;
    clicks.textContent = count;
    sessionStorage.setItem('click', `${count}`);
}) ;


