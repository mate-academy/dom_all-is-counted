'use strict';

window.addEventListener('load', main);

const COUNT = 'counter';

function main() {
  const countPlace = document.querySelector('.count');
  numberIncrement(countPlace);
}

function numberIncrement(place) {
  try {
    let incrementedNumber = sessionStorage.getItem(COUNT);
    document.addEventListener('click', () => {
      incrementedNumber++;
      sessionStorage.setItem(COUNT, incrementedNumber);
      place.textContent = incrementedNumber;
    });
  } catch {
    sessionStorage.setItem(COUNT, 0);
  }
}
