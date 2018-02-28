var phase = 0, speed = 0.03;
var max CircleSize = 20;
var numRows = 10;
var numCols = 16;
var numStrands = 2;
var ColorA = (253, 174, 120);
var ColorB = (226, 129, 161);

function setup(){
	createCanvas(500, 500);
	noStroke();
}




function draw(){
	background(127);
	phase = frameCount * speed;
    
    for(var strand = 0; strand < numStrands; strand += 1){
    	var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    	for (var col = 0; col < numCols; col += 1){
    		var colOffset = map( col, 0, numsCols, 0, TWO_PI);
    		var x = map(col, 0, numCols, 50, width - 50);
    		for(var row = 0; row < numRows; row += 1){
    			var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
    		    var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
    		    var CircleSize = sizeOffset * maxCircleSize;

    		    fill(lerpColor(colorA, ColorB, row / numRows));
    		    ellipse(x, y, CircleSize,CircleSize);
    		}
    	}
    }
    