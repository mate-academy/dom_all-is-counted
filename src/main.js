"use strict";

window.addEventListener("load", main);

const COUNT = "counter";

function main() {
  const countPlace = document.querySelector(".count");

  numberSet(countPlace);
  numberIncrement(countPlace);
}

function numberIncrement(place) {
  let incrementedNumber = numberSet();

  document.addEventListener("click", () => {
    incrementedNumber++;
    sessionStorage.setItem(COUNT, incrementedNumber);
    place.textContent = incrementedNumber;
  });
}

function numberSet(place) {
  const number = sessionStorage.getItem(COUNT);

  if (!number) {
    sessionStorage.setItem(COUNT, 0);
  }
  if (place) {
    place.textContent = number;
  }
  return number;
}
