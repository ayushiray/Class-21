var fixedRect, movingRect; //global variables

var go1, go2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.velocityX = 3;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -3;


  go1 = createSprite(200, 50, 50, 80);
  go1.shapeColor = "yellow";
  go1.velocityX = 3;

  go2 = createSprite(500, 50, 50, 80);
  go2.shapeColor = "yellow";
  go2.velocityX = -3;
}

function draw() {
  background("black");  

  
  bounceoff(movingRect, fixedRect);
  bounceoff(go1, go2);
  drawSprites();
}
  
  function bounceoff(object1,object2){
    if (object1.x-object2.x < object1.width/2+object2.width/2 
      && object2.x-object1.x<object1.width/2+object2.width/2 ){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
   if(object1.y-fixedRect.y < object1.height/2+object2.height/2 
    && object2.y-object1.y < object1.height/2+object2.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
  }