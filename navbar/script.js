function expandMenu() {
	var nav = document.getElementById("topnav");
	var button = document.getElementById("menu-button-text");
	if (nav.classList.contains("horizontal")) {
		nav.classList.replace("horizontal", "vertical");
		button.style.transform = "rotateZ(0.5turn)";
	} else if (nav.classList.contains("vertical")) {
		nav.classList.replace("vertical", "horizontal");
		button.style.transform = "rotateZ(0turn)";
	} else {
		console.error("nav doesn't have a class!");
	}
}