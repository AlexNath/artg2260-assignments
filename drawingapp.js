var diameter = 10;
var colr = 0;
var colb = 0;
var colg = 0;

function setup() {
	var c = createCanvas(500, 500);

	background( 255, 255, 255);

}

function draw(){
	noStroke();
	fill(colr, colg, colb);
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, diameter, diameter);	
	} 
}

function keyPressed () {
	//Black
	if (key == 'b' || key == 'B') {
		colr = 0; 
		colg = 0;
		colb = 0;
	//White
	} else if (key == 'w' || key == 'W') {
		colr = 255;
		colg = 255;
		colb = 255;
	//Dark Aquamarine
	} else if (key == 'a' || key == 'A') {
		colr =  2;
		colg = 132;
		colb = 130;
	//Bordeau
    } else if (key == 'r' || key == 'R') {
		colr =  95;
		colg = 2;
		colb = 31;
	//Yellow
	} else if (key == 'y' || key == 'Y') {
		colr = 255;
		colg = 204;
		colb = 0;
	//Teal
	} else if (key == 'g' || key == 'G') {
		colr = 0;
		colg = 128;
		colb = 129;
	//Organge
	} else if (key == 'o' || key == 'O') {
		colr = 255;
		colg = 127;
		colb = 80;

	} else if (keyCode == LEFT_ARROW) {
		diameter *=2;
	} else if (keyCode == RIGHT_ARROW) {
		diameter/=2;
	} else if (key == 's' || key == 'S') {
		saveCanvas ('myCanvas', 'jpg');
	} else if (keyCode == BACKSPACE) {
		setup ();
	}
}

