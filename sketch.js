var bullet;
var wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

// SPRITE= createSprite(xposition,yposition,width,height)
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=5;
  wall = createSprite (1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(10,52);  
}

function draw() {

  background("black");  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed/(thickness*thickness*thickness
    );
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }  
  }
  if(damage<10){
wall.shapeColor=color(0,255,0)
  }
  // bullet.collide(wall)
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true;
}
return false;
}