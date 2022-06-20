function showMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle('menu_anim');
}

function hideMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle('menu_anim');
}

function toggleSection(arrowButton) {
	var section = arrowButton.parentNode.nextElementSibling;
	section.classList.toggle('menu_section_anim');
	arrowButton.classList.toggle('arrow_anim');
}