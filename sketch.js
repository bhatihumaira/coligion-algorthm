var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,150,50,70);
  fixed.shapeColor = 'green'
  moving.shapeColor = 'green'
  fixed.debug = true;
  moving.debug = true;
}

function draw() {
  background(255,255,255); 
  moving.x = mouseX
  moving.y = mouseY 
 if (fixed.x-moving.x<=fixed.width/2+moving.width/2 &&
 moving.x-fixed.x<=fixed.width/2+moving.width/2 &&
 fixed.y-moving.y<=fixed.height/2+moving.height/2 &&
 moving.y-fixed.y<=fixed.height/2+moving.height/2) { 
 fixed.shapeColor = 'red'
 moving.shapeColor = 'red'
}else{
  fixed.shapeColor = 'green'
  moving.shapeColor = 'green'
}
  drawSprites();
}