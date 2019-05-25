window.addEventListener('load', () => {
    const span = document.getElementById('counter');
    let count = sessionStorage.getItem('counter') || 0;
    span.textContent = count;
    document.body.addEventListener('click', () => {
        count++;
        sessionStorage.setItem('counter', count);
        span.textContent = count;
    });
});

