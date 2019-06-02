'use strict';
function countClickPage (elem) {
  let countClickOnPage = sessionStorage.getItem('countClickOnPage');
  let counterContainer = document.createElement('p');
  elem.append(counterContainer);
  counterContainer.textContent = countClickOnPage;
  
  elem.addEventListener('click', (event) => {
    countClickOnPage++;
    sessionStorage.setItem('countClickOnPage', countClickOnPage);
    counterContainer.textContent = countClickOnPage;
  });
}
countClickPage (document.querySelector('body'));  
