const p = document.querySelector("#clickcount");
const storage = sessionStorage;
 
let counter = storage.getItem("counter") || 0;
 
const counting =() => {
    counter++;
	renderCounter();
}
 
 function renderCounter() {
	 p.innerHTML = counter;
	 storage.setItem("counter", counter);
 }
 
document.addEventListener("click", counting);
renderCounter();
