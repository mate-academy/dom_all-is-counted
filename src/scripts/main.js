'use strict';

const amount = document.querySelector('.amount');
const clicks = sessionStorage.getItem('amountClicksOnPage');

function putClicksOnPage(clicksAmount) {
  const resetAnimation = function() {
    amount.style.fontSize = '6em';
    amount.style.animation = 'none';
  };
  amount.innerText = clicksAmount;
  amount.style.animation = '2s onClickAnimation';
  setTimeout(resetAnimation, 2000);
}

function initializeHTMLAmount() {
  amount.style.fontSize = '6em';
  amount.style.transformOrigin = 'center';
  putClicksOnPage('0');
}

function initializeAmountInStorage() {
  sessionStorage.clear();
  sessionStorage.setItem('amountClicksOnPage', '0');
}

if (!clicks) {
  initializeAmountInStorage();
  initializeHTMLAmount();
} else {
  putClicksOnPage(clicks);
}
document.addEventListener('click', () => {
  const newClickNumber = (+sessionStorage.getItem('amountClicksOnPage') + 1)
    .toString();
  sessionStorage.setItem('amountClicksOnPage', newClickNumber);
  putClicksOnPage(newClickNumber);
});
console.log('Thank You, mate academy!');
