const clicks = document.getElementById('clicks');

window.addEventListener('load', () => {
    const writeTextContent = (elem, content) => elem.textContent = content;
    let counter = sessionStorage.getItem('counter') || 0; 
    writeTextContent(clicks, counter);    
    window.addEventListener('click', () => {
        counter++;
        writeTextContent(clicks, counter);
        sessionStorage.setItem('counter', `${counter}`);
    })
})