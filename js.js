let counter = 0;

document.body.addEventListener('click', () => {
   counter++;
   sessionStorage.setItem('amount of clicks', counter);
   countClick();
})

function countClick(){
    if (sessionStorage.getItem('amount of clicks')) {
        counter = sessionStorage.getItem('amount of clicks');
    }
    document.body.innerText = `${counter}`;
}
countClick();