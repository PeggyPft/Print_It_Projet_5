//Variables du projet//

const arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click",()=>{
		console.log("clic gauche")
	})

const arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click",()=>{
		console.log("clic droit")
	})

const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides)

const dots=document.querySelector(".dots")
let index=0

//Ajout des bullets points//
function displayDots() {
	for (let i=0; i<slides.length; i++){
	const dot = document.createElement ("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		if (i===index){
			dot.classList.add("dot_selected")
		}
	}
}
displayDots()