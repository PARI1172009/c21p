var thickness, speed, weight, bullet, wall, damage;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  bullet = createSprite(100, 200, 30, 15);
  bullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);

  speed= random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;

}

function draw() {

  background("blue");
 
if (wall.x-bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0

var deformation =0.5 * weight * speed *speed/22509
if (deformation>180){
  bullet.shapeColor="white"
}

if (deformation<180 && deformation>100) {
  bullet.shapeColor="white"
}
if (deformation<180){
  bullet.shapeColor="white" 
}
}


  }


if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage=0.5 * weight * speed*  speed/(thickness**3);

if (damage>10)
{
wall.shapeColor="red"
}
if (damage<10)
{
wall.shapeColor="green"
}

  drawSprites();
} 

function hasCollided (bullet,wall){
bulletRightEdge= bullet.x + bullet.width;
wallleftEdge= wall.x
if (bulletRightEdge>wallLeftEdge){

return true;

}

return false;

}




