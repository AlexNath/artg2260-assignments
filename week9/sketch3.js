let fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/fingers.mov',
                         'assets/fingers.webm']);
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  fingers.loadPixels();
  let stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      let i = y * width + x;
      let darkness = (255 - fingers.pixels[i*4]) / 255;
      let radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}