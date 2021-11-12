var bg, backgroundImg,platformImage,platformGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =2;
 
  ironMan = createSprite(180,450, 20, 50);
  ironMan.addImage("stand", ironImage);
  ironMan.scale = 0.3;
}

function draw() {
background(backgroundImg);

  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  
 drawSprites();  
}
