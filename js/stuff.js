
function setup() {
  let cnv = createCanvas(600,400);
  cnv.parent('sketch-holder');
}
function widowResized(){
resizeCanvas(windowWidth, windowHeight);
background(255, 2, 250)
}