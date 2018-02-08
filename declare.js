// declare variables xPos and yPos
var = xPos
var = yPos
var = xSpeed
var = ySpeed
var = img
var = imageWidth
var = imageHeight
// declare a var called xSpeed;
// declare a var called ySpeed
// declare a variable called img 
// declare a var for image width, assign 40 
// declare a var for image height, assign 30
function preload(){
img = loadImage('assets/imageName.png');
}

// use the preload()function to load an image, 
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there

function setup() {
  createCanvas( 400, 400)
  xPos = 200
  yPos = 200
	// create a canvas at least 400 x 400
	// set xPos to be half of the width 
	// set yPos to be half of the height
xSpeed(1<random>10)
ySpeed(1<random>10)
	// assign xSpeed and ySpeed 
	// with random values between 1 and 10
}

function draw(){
	background(255);                 // set the background to black
 
	// draw the image at the (xPos, yPos) coordinate,
	// using the template image(img, xPos, yPos, width, height
	// add the xSpeed to xPos
	// add the ySpeed to yPos

	// if we reach the edge of the canvas
	// turn around (toggle xSpeed negative to positive)

	// same as above, toggle ySpeed if we hit the top or bottom
}