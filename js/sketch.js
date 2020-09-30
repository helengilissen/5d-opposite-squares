// Opdracht 5D: Opposite squares

var rectX = 0;
var rectY = 600;

function setup () {
  createCanvas (600, 600);
}

function draw () {
  background (240);

  fill (0,255,0)
  rect (rectX,mouseY,50,50)
  rect (rectY,mouseY,50,50)

  rectX = rectX + 2
  rectY = rectY -2
}