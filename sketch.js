var garden, rabbit;
var gardenImg, rabbitImg;
var apple, appleImg
var leaves, leavesImg
var rabbitborder

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  rabbitborder = createSprite(180, 265, 30, 30);
  rabbitborder.scale = 0.09;




  var appleX = random(30, 370)
  apple = createSprite(appleX, -30, 30, 30)
  apple.addImage(appleImg);
  apple.scale = 0.05
  apple.velocityY = 4
  apple.lifetime = width / apple.velocityY


}
function spawnApple() {
  if (frameCount % 100 == 0) {
    var appleX = random(30, 370)
    apple = createSprite(appleX, -30, 30, 30)
    apple.addImage(appleImg);
    apple.scale = 0.05
    apple.velocityY = 4
    apple.lifetime = width / apple.velocityY





  }



}
function spawnLeaves() {
  if (frameCount % 60 == 0) {
    var leafX = random(20, 380);
    leaf = createSprite(leafX, -30)
    leaf.addImage(leavesImg);
    leaf.scale = 0.05
    leaf.velocityY = 2
    leaf.lifetime = width / leaf.velocityY

  }

}


function draw() {
  rabbitborder.x = rabbit.x
  if (rabbitborder.isTouching(apple)) {
    apple.visible = false
  }
  if (keyIsDown(LEFT_ARROW)) {
    rabbit.x -= 10
  }
  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.x += 10
  }
  background(0);
  spawnApple();
  spawnLeaves();
  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}