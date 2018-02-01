var diameter = 5;
var R = 0;
var B = 0;
var G = 0;
var X = rect( 10 + diameter, 10 + diameter, 10 + diameter, 10+ diameter)

function setup() {
	var c = createCanvas(700, 700);

	background( 255, 255, 255);

}

function draw(){
	noStroke();
	fill(R, G, B);
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
		ellipse(mouseX, mouseY, diameter, diameter);
    }
	    if (mouseButton === RIGHT) {
	    rect(mouseX, mouseY, mouseX + 5, mouseY + 5);
	} 
  }
}

function keyPressed () {
	//Black
	if (key == 'b' || key == 'B') {
		R = 0; 
		G = 0;
		B = 0;
	//White
	} else if (key == 'w' || key == 'W') {
		R = 255;
		G = 255;
		B = 255;
	//Dark Aquamarine
	} else if (key == 'a' || key == 'A') {
		R =  2;
		G = 132;
		B = 130;
	//Bordeau
    } else if (key == 'r' || key == 'R') {
		R =  95;
		G = 2;
		B = 31;
	//Yellow
	} else if (key == 'y' || key == 'Y') {
		R = 255;
		G = 204;
		B = 0;
	//Teal
	} else if (key == 'g' || key == 'G') {
		R = 0;
		G = 128;
		B = 129;
	//Organge
	} else if (key == 'o' || key == 'O') {
		R = 255;
		G = 127;
		B = 80;

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

