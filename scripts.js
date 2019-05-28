const clickCounter = document.querySelector('#clickCounter');

window.addEventListener('load', () => {
    function addContent(elem, content) {
        elem.textContent = content;
    };
    let counter = sessionStorage.getItem('counter') || 0;
    addContent(clickCounter, counter)
    window.addEventListener('click', () => {
        counter++;
        addContent(clickCounter, counter);
     sessionStorage.setItem('counter', `${counter}`);
    })   
});