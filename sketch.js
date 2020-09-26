var player;
function preload(){

}

function setup(){
createCanvas(1600, 1600);

var player = createSprite(800, 800, 50, 50);
player.shapeColor = "blue";
}

function draw(){


if(keyCode === 83){
  player.velocityY = -1; 
}

if(keyCode === 87){
  player.velocityY = 1;
}

if(keyCode === 65){
  player.velocityX = -1;
}

if(keyCode === 68){
  player.velocityX = 1;
}



drawSprites();
}