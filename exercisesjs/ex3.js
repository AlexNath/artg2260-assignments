var inc = 0.1;
var scl = 10;
var cols, rows;
var zoffset = 0


function setup(){
createCanvas(500, 500);
cols =floor(width / scl);
rows =floor(height / scl);
frameRate(30);
}
function draw(){
  background(255)
  map(mouseY, 0, 500, 0, 1)
  var yoffset = 0;
  for (var y = 0; y < rows; y++){
    var xoffset = mouseY;
    zoffset = zoffset + 0.001;
    for (var x = 0; x < cols; x++){
      var index =(x + y * width) * 4;
      var r = noise( xoffset, yoffset, zoffset) * 255;
    xoffset += inc;
     fill(r);
     frameRate(30);
    rect(x * scl, y * scl, scl, scl);

    }
  yoffset += inc; 

  }
}