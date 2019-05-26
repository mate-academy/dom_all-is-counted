const clicks = document.getElementById('clicks');

window.onload = () => {
    let counter = sessionStorage.getItem('counter') || 0; 
    clicks.textContent = counter;    

    window.onclick = () => {
        counter++;
        clicks.textContent = counter;
        sessionStorage.setItem('counter', `${counter}`);
    }
}
