let y = 0;
function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background("#c0392b");

  fill(250);
  textSize(35);
  text("x: " + mouseX + " y: " + mouseY, 10, 35);

  stroke(255);
  line(0, 300, 1000, 300);
  line(500, 0, 500, 600);
}
