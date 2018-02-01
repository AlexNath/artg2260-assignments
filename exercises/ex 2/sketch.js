function setup() {
	createCanvas(200, 200);
	for (var y = 20; y <= 180; y += 2){
		for (var x = 20; x <= 180; x += 2){
			if((x % 5) == 0){
				triangle(x, y, x+3, y-3);
			} else{
				triangle(x, y, x+3, y+3);
			}
		}
    }
}