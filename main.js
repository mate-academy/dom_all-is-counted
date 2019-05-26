'use strict';
function makeSortable (elem) {
  var countClick = sessionStorage.getItem("countClick");
   
  let append = document.createElement('p');
  elem.addEventListener('click', (event) => {
    append.remove();
    sessionStorage.setItem("countClick", countClick);
    countClick++;
    append.innerHTML = countClick;
    elem.append(append);
  });
}
makeSortable (
  document.querySelector('body')
);  
