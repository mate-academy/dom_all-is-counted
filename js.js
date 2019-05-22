(function () {
    const body = document.querySelector('body');
    const storage = window.sessionStorage;

    let counter = storage.getItem('counter') || 0;

    body.addEventListener('click', bodyClicked);

    function bodyClicked() {
      counter ++;
      updateCounter();
    }

    function updateCounter () {
      body.textContent = counter;
      storage.setItem('counter', counter);
    }

    updateCounter();
  }
)();
