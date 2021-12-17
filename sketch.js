
function setup() {
  createCanvas(500,500);
  background(51);
  box = createSprite(250,250,40,40);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW)) {
    background ("red");
    box.position.x+=5;
    box.shapeColor = ("blue");

  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x-=5;
    box.shapeColor = ("red");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.position.y-=5;
    box.shapeColor = ("green");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.position.y+=5;
    box.shapeColor = ("yellow");
  }

  if (box.position.x>480) {
    box.position.x=480;
  }
  
  if (box.position.x<20) {
    box.position.x=20;
  }

  if (box.position.y<20) {
    box.position.y=20;
  }
  
  if (box.position.y>480) {
    box.position.y=480;
  }
  
  
  drawSprites();
}

