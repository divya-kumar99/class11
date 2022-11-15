
var trex ,trex_running;
var ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,20,50)
  ground=createSprite(200,180,400,20)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  trex.x=50
  
  //create a trex sprite
 
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY=-1


  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
  drawSprites()
  

}
