'use strict';

window.addEventListener('load', main);

const COUNT = 'counter';

function main() {
  const countPlace = document.querySelector('.count');
  numberIncrement(countPlace);
}

function numberIncrement(place) {
    let incrementedNumber = sessionStorage.getItem(COUNT) || 0;
    document.addEventListener('click', () => {
      sessionStorage.setItem(COUNT, incrementedNumber);
      place.textContent = incrementedNumber;
      incrementedNumber++;
    });
}
