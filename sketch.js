//Dibujo del plano cartesiano
function setup() {
  //Dimensiones del canvas
  createCanvas(1000, 600);
}

function draw() {
  // Color en hexadecimal del plano cartesiano
  background("#7494aa");

  // Color de las líneas del eje X y eje Y
  fill(250);
  // Tamaño y escalamiento del eje X y Y en pantalla por medio de las funciones mouseX y mouseY
  textSize(35);
  text("x: " + mouseX + " y: " + mouseY, 10, 35);

  stroke(255);
  line(0, 300, 1000, 300);
  line(500, 0, 500, 600);
}
