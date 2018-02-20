var s;
var scl = 20;
var food;

function setup(){
	createCanvas(playfield, 640);
	s = new Snake();
	frameRate(10);
	food = pickLocation();

}
//picks random location for food 
function pickLocation(){
	var cols = floor(playfield/scl);
	var rows = floor(playfield/scl);
	food = createVector(floor(random(cols)), floor(random(rows)))
	food.mult(scl);
}

}

function draw(){
	background(51);
	scoreboard();
	//create new food
	if (s.eat(food)){
		pickLocation();
	}
	s.death();
	s.update();
	s.show();
	
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

//movement
function keyPressed(){
  if (keyCode === UP_ARROW){
  	s.dir(0,-1);
  }
    else if (keyCode === DOWN_ARROW){
  	s.dir(0,1);
  }
    else if (keyCode === RIGHT_ARROW){
  	s.dir(1,0);
  }
    else if (keyCode === LEFT_ARROW){
  	s.dir(-1,0);
  }
}
function scoreboard(){
	fill(0);
	rect(0, 600, 600, 40);
	fill(255);
	textFont("Georgia");
	textSize(18);
	text("Score:", 10, 625);
    text("Highscore:", 450, 625);
    text(s.score, 70, 625);
    text(s.highscore, 540, 625);
}


}