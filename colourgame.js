var colours = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]
var numSquares = 6;
var colours = generateRandomColour(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById('colourDisplay')
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var stripe = document.querySelector("#stripe");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colours = generateRandomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i];
		
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colours = generateRandomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){
		
			squares[i].style.backgroundColor = colours[i];
			squares[i].style.display = "block";
		
	}
});


resetButton.addEventListener("click", function(){
	colours = generateRandomColour(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = "#f9f9f9";
	stripe.style.backgroundColor = "#f9f9f9";
	messageDisplay.textContent = "";
})

colourDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colours[i];

	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;
		console.log(clickedColour, pickColour);
		if(clickedColour === pickedColour){
			messageDisplay.textContent = "Correct!!!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColour);
			h1.style.backgroundColor = clickedColour;
			stripe.style.backgroundColor = clickedColour;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(colour){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColour(num){
	var arr = []

	for(var i = 0; i < num; i++)
		arr.push(randomColour())


	return arr; 
}

function randomColour(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}