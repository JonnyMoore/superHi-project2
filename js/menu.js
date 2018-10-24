const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav") // use this to slide menu over the main section. using both mainTag & navTag opens slides both sections over at same time

// when i click the toggle tag, toggle a class of open on the main tag
// and if it's open, make the toggle tag say closed
// and if not, make the toggle tag say open
toggleTag.addEventListener("click", function(){
	mainTag.classList.toggle("open")
	navTag.classList.toggle("open")
	
	if (mainTag.classList.contains("open")) {
		toggleTag.innerHTML = '<img src="assets/img/close.svg">Close'
	}
	else {
		toggleTag.innerHTML = '<img src="assets/img/menu.svg">Menu'
	}
	
})