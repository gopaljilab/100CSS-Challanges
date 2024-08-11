const menu = document.querySelector(".menu");
menu.addEventListener("click", (event) => {
	//attach a class called forward to parent
	if(menu.classList.contains('forward')) {
		menu.classList.replace("forward", "backward");
	}
	else if(menu.classList.contains('backward')) {
		menu.classList.replace("backward", "forward");
	}
	else {
		menu.classList.add('forward')
	}
});
