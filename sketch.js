var garden, gardenImg
var cat, catImg, catImg2, catImg3
var mouse, mouseImg, mouseImg2, MouseImg3

function preload() {
gardenImg=loadImage("images/garden.png");
catImg=loadAnimation("images/cat1.png")
catImg2=loadAnimation ("images/cat2.png","images/cat3.png");
catImg3= loadAnimation("images/cat4.png");
mouseImg=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,850);
    
    garden=createSprite(350,440);
    garden.addImage("garden",gardenImg);
    
    
    //create tom and jerry sprites here
cat=createSprite(10,20);
cat.addAnimation(catImg);
cat.scale=0.2;
cat.x=400;
cat.y=690;
mouse=createSprite(700,200);
mouse.addAnimation("mouserunning",mouseImg);
mouse.scale=0.1;
mouse.x=150;
mouse.y=690;
}
function draw() {
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("catlastImage",catImg3);
    cat.changeAnimation("catlastImage");
    cat.velocityX=0;
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
}

}
