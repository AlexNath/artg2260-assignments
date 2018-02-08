var inc = 0.01;
var scl = 5;
var cols, rows;

function setup(){
createCanvas(500, 500);
cols =floor(width / scl);
rows = floor(height / scl)
}
function draw(){
  var yoffset = 0;
  for (var y = 0; y < rows; y++){
    var xoffset = 0;
    for (var x = 0; x < cols; x++){
      var index =(x + y * width) * 4;
      var r = noise( xoffset, yoffset) * 255;
    xoffset += inc;
     fill(r * random(255));
    rect(x * scl, y * scl, scl, scl);
    }
  yoffset += inc; 
  }
}