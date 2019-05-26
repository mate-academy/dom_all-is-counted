'use strict';

window.addEventListener('load', countHandler);

const STORAGE_KEY = 'clicks_counter';

function storageHandler() {
  let initialValue = sessionStorage.getItem(STORAGE_KEY);

  if (!initialValue) {
    initialValue = 0;
    sessionStorage.setItem(STORAGE_KEY, initialValue);
  }

  return initialValue;
}

function updateDOM(count, element) {
  element.textContent = count;
}

function updateStorage(number) {
  sessionStorage.setItem(STORAGE_KEY, number);
}

function update(number, element) {
  updateDOM(number, element);
  updateStorage(number);
}

function countHandler() {
  const counterBlock = document.querySelector('.counter');
  let number = storageHandler();

  updateDOM(number, counterBlock);

  document.addEventListener('click', event => {
    number++;
    update(number, counterBlock);
  })
}
