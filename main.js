const p = document.querySelector("#clickcount");
const storage = window.localStorage;

let i = storage.getItem("clickcount");
if(!i) {
	i = 0;
	storage.setItem("clickcount", 0);
}

p.innerHTML = i;
document.addEventListener("click", () => {
	i++;
	p.innerHTML = i;
	storage.setItem("clickcount", i);
});