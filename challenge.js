//circle-grid.js - a grid of circled made with a nested loop


function setup() { 
  createCanvas(400, 400);
    background("black");
} 

function draw() { 
  var r = 20;
	var c = 20;
  for (var row = 0; row < 19; row ++) {
    for (var col = 0; col < 19; col ++) {
      fill("white");
      ellipse(c, r, 12, 12);
      c = c + 20
    }
    r = r + 20
    c = 20
  }
}
