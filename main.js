const p = document.querySelector("#clickcount");
const storage = sessionStorage;
 
let counter = storage.getItem("clickcount");
if(!counter) {
    counter = 0;
    storage.setItem("clickcount", 0);
}
 
p.innerHTML = counter;
document.addEventListener("click", () => {
    counter++;
    p.innerHTML = counter;
    storage.setItem("clickcount", counter);
});