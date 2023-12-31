//Variables du projet//

const arrowLeft = document.querySelector(".arrow_left")

const arrowRight = document.querySelector(".arrow_right")	

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
const image = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")


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

//Modification du slide au clic sur le bouton droit//
function clickArrowRight() {
	arrowRight.addEventListener("click",()=>{
		const changeDots = document.querySelectorAll(".dots .dot")
		changeDots[index].classList.remove("dot_selected")
		index++
		if (index > slides.length -1){
			index=0
		}
		image.src = slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;	
		changeDots[index].classList.add("dot_selected")
	})
}
clickArrowRight()

//Modification du slide au clic sur le bouton gauche//
function clickArrowLeft() {
	arrowLeft.addEventListener("click",()=>{
		const changeDots = document.querySelectorAll(".dots .dot")
		changeDots[index].classList.remove("dot_selected")
		index--
		if (index < 0){
			index=slides.length -1
		}
		image.src = slides[index].image;
		tagLine.innerHTML = slides[index].tagLine;	
		changeDots[index].classList.add("dot_selected")
	})
}
clickArrowLeft()