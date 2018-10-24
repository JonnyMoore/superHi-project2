// pick all of the images and layer them based on the z index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of 2 things:
// 1. which slide we're currently talking about
// 2. what the z-index is
let currentSlide = 0
let z = 1

// when i click the slide area, change the slide based on z-index
slideArea.addEventListener("click", function(){
	currentSlide = currentSlide + 1
	
	if (currentSlide > images.length -1) {
		currentSlide = 0
	}
	
	z = z + 1
	
	// remove the animation for the style for EVERY image by looping over each image 1-by-1
//	images.forEach(function(image){
//		image.style.animation = ""
//	})
		images.forEach(image => { //This is an shorthand way of writing the above
		image.style.animation = ""
	})
	
	// pick the right image
	images[currentSlide].style.zIndex = z
	images[currentSlide].style.animation = "fade 0.5s"
	
})