
var y;
var num = 14;

function setup() {
  createCanvas(700, 600);

}

function draw() {
background(85, 194, 224)
//Sun
fill(255, 245, 63)
stroke(255, 245, 63)
ellipse(20, 20, 150, 150)



//Water
fill(15, 25, 221)
stroke(15, 25, 221)
rect( 0, 440, 800, 300)

//Water Reflection
stroke(255, 255, 255)
bezier( 500, 500, 600, 450, 500, 500, 600, 500)

stroke(255, 255, 255)
bezier( 400, 550, 660, 500, 500, 500, 600, 550)

stroke(255, 255, 255)
bezier( 200, 450, 380, 450, 300, 400, 350, 440)




//Sand
fill(232, 207, 46)
stroke(232, 207, 46)
bezier( 0, 400, 300, 500, 700, 800, 0, 600)

//Palm Tree
fill(84, 71, 48)
stroke(61, 51, 35)
ellipse(0, 460, 100, 100)
ellipse(10, 430, 95, 95)
ellipse(15, 400, 90, 90)
ellipse(20, 370, 85, 85)
ellipse(25, 340, 80, 80)
ellipse(30, 310, 75, 75)
ellipse(35, 280, 70, 70)

//Rock 
stroke(104, 109, 103)
fill(133, 140, 131)
bezier(-60, 550, -40, 450, 100, 350, 150, 550)
bezier(0, 560, -40, 450, 100, 540, 50, 560)

bezier(100, 560, 50, 530, 200,  530, 150, 560)


//Leafs

translate(width / 2.3 , height / 8);
rotate(PI / 3.0)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(50, 220, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 3.0)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(100, 235, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 2.0)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(275, 90, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 3.5)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(80, 220, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 3)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(-85, 100, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 10)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(-320, 130, 30, 220)

translate(width / 2.3 , height / 8);
rotate(PI / 9)
fill(48, 160, 38)
stroke(48, 89, 38)
ellipse(270, 700, 30, 220)


}