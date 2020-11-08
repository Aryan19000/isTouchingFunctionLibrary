var rect, rectMoving;

function setup() {
  createCanvas(800,400);
  rect= createSprite(400, 200, 50, 50);
  gameObject1= createSprite(400, 100, 50, 50);
  gameObject2= createSprite(300, 100, 50, 50);
  gameObject3= createSprite(200, 100, 50, 50);
  gameObject4= createSprite(100, 100, 50, 50);
  rect.shapeColor="green";
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  gameObject4.shapeColor="green";
  rect.debug=true;
  rectMoving=createSprite(300, 200, 50, 100);
  rectMoving.shapeColor="green";
  rect.debug=true;
  rectMoving.debug=true;
  //rectMoving.velocityX=5;
  //rect.velocityX=-5;
}

function draw() {
  background(0); 
  
  rectMoving.x=World.mouseX; 
  rectMoving.y=World.mouseY;

if(isTouching(rectMoving, gameObject1)){
  rectMoving.shapeColor="blue";
  rect.shapeColor="blue";
}else{
  rectMoving.shapeColor="green";
  rect.shapeColor="green";
}

  /*if(rectMoving.x-rect.x<rectMoving.width/2+rect.width/2
  && rect.x-rectMoving.x<rectMoving.width/2+rect.width/2){
    rectMoving.velocityX=rectMoving.velocityX*(-1);
    rect.velocityX=rect.velocityX*(-1);
  }
  if(rectMoving.y-rect.y<rectMoving.height/2+rect.height/2
    && rect.y-rectMoving.y<rectMoving.height/2+rect.height/2){
      rectMoving.velocityY=rectMoving.velocityY*(-1);
      rect.velocityY=rect.velocityY*(-1);
    }*/

  drawSprites();
}