"use strict"
let acc = document.getElementsByClassName ("prices-info__accordion");
let i;

for (i=0; i< acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		let panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

let select = document.querySelector("#select");
select.addEventListener("chenge", function() {
})