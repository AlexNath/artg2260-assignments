function setup() {
  createCanvas(700, 600);
}

function draw() {
 //Head
ellipse (150,60,50,50);
point (140, 60)
point (160, 60)

//Eyes
ellipse (140, 60, 8, 8);
ellipse (160, 60, 8, 8);

//Mouth
bezier(140, 70, 140, 80, 160, 80, 160, 70)

//Body
line(150, 90, 150, 200)

//Arms
line(150, 100, 160, 160)
line(160, 160, 155, 200)
ellipse(155, 200, 10, 10)
line(150, 100, 70, 70)
line(70, 70, 160, 40)
ellipse(160, 40, 10, 10)

//Leg
line( 150, 200, 170, 240)
line( 170, 240, 160, 320)
//Foot
line(160, 320, 170, 320)

//Leg
line( 150, 200, 130, 260)
line( 130, 260, 100, 320)
//Foot
line(100, 320, 110, 320)

}