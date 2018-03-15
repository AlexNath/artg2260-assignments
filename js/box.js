//Csetup() draw() Box class. The Box class should contain fields for color and y positions. It should contain a move() method that raises the box one pixel per frame. It should contain a teleport() function that checks for if the box has reached the top of the canvas, and if so, change its color randomly and teleport it back to the bottom of the canvas. Submit this as Exercise 4.0 on your weekly page.

let b;

function setup(){
b = new Box();
	

}
function draw(){
	background(0);
     b.move();
     b.teleport();


class Box{
	constructor(){
	this.x = 5
	this.y = 5
	this.x1 = 10
	this.y1 = 10
	this.xSpeed = 5
	this.ySpeed = 5
	this.r
	this.g
	this.b
}
display(){
	fill()
    Box(this.x, this.y, this.x1, this.y1);

}
move(){
    this.x += this.xSpeed;
    this.x += this.ySpeed;

}
teleport(){
    if (this.y+this.y1/2 >= width || this.x-this.x1/2 <=0){
    	this.r= random(255)
    	this.g= random(255)
    }
    if (this.y+this.y1/2>= height || this.y-this.y1/2 <= 0){
}
}
}

}