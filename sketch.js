var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 100, 50, 80 );
  fixRect.shapeColor="green";
  fixRect.debug="true";
  fixRect.velocityY=5;

  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug="true";
  movingRect.velocityY=-5;
  
}

function draw() {
  background(255,255,255);  
  
  bounceOff(movingRect, fixRect);
    

  
  
  drawSprites();
}

function isTouching() {
  if(fixRect.x-movingRect.x < fixRect.width/2+movingRect.width/2 && 
    movingRect.x-fixRect.x < fixRect.width/2+movingRect.width/2 &&
    fixRect.y-movingRect.y < fixRect.height/2+movingRect.height/2 &&
    movingRect.y-fixRect.y < fixRect.height/2+movingRect.height/2) {
     movingRect.shapeColor="red";
     fixRect.shapeColor="red";

  }

  else {
    movingRect.shapeColor="green";
    fixRect.shapeColor="green";

  }

}

