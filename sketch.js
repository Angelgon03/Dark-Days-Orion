//The setup function only happens once
var chair=350;
var berry=200;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(190,214,330); //an RGB color for the canvas' background
  //circle

  stroke(255,255,127); // an RGB color for the circle's border
  fill(655,455,130,180); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(200, 130,55,100); // center of canvas, 20px dia
fill( 231, 197, mouseX);
  strokeWeight(5);
  rect ( berry, 200, chair, 350);
  berry= berry -3;
  line (100, 100, chair,350);
  chair= chair-1;
  fill ( 180, 282, 133);
  strokeWeight (4);
  textSize (110);
  textFont('Myths');
  textStyle(ITALIC);
text("Gem", 150, 250);
}
