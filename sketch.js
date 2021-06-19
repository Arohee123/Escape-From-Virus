var path,boy,monster1,monster2,energy,vaccine,sanitiser,mask;
var pathImg,boyImg,monster1Img,monster2Img,energyImg,vaccineImg,sanImg,maskImg;
var Power = 0;
var monsterG,energyG,sanitiserG,vaccineG,maskG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  monster1Img= loadImage("Screenshot 2021-06-05 125256.png");
  monster2Img=loadImage("Screenshot 2021-06-05 130727.png");
  energyImg=loadImage("Screenshot 2021-06-06 195035.png");
  vaccineImg=loadImage("vaccine.png");
  sanImg=loadImage("sanitizer.png");
  maskImg=loadImage("mask.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 20;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("saver",boyImg);
boy.scale=0.08;
  
  monsterG=new Group();
  energyG=new Group();
  vaccineG=new Group();
  maskG=new Group();
  sanitiserG=new Group();
  
}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
 
    createmonster();
    createenergy();
    
    
    if (energyG.isTouching(boy)) { 
      energyG.destroyEach();
      Power=Power+150;
    }
    else if (vaccineG.isTouching(boy)) {
      vaccineG.destroyEach();
      Power=Power+50;
      
    }else if(maskG.isTouching(boy)) {
      maskG.destroyEach();
      Power= Power + 50;
      
     }else if(sanitiserG.isTouching(boy)) {
      sanitiserG.destroyEach();
      Power= Power + 50;
         
    }else{
      if(monsterG.isTouching(boy)) {
        gameState=END;
        
        }else{
      if(monsterG.isTouching(boy)) {
        gameState=END;
          
     
        
        
        
        boy.addAnimation("saver",endImg);
        boy.x=700;
        boy.y=900
        boy.scale=0.6;
        
        energyG.destroyEach();
        vaccineG.destroyEach();
        maskG.destroyEach();
        sanitiserG.destroyEach();
        monsterG.destroyEach();
        
        energyG.setVelocityYEach(0);
        vaccineG.setVelocityYEach(0);
        maskG.setVelocityYEach(0);
        sanitiserG.setVelocityYEach(0);
        monsterG.setVelocityYEach(0);
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Power: "+ Power,150,30);
  }

}

function createenergy() {
  if (World.frameCount % 200 == 0) {
  var energy = createSprite(Math.round(random(50,width-50),40, 10, 10));
  energy.addImage(energyImg);
  energy.scale=0.3;
  energy.velocityY = 20
  energy.lifetime = 250;
  energyG.add(energy);
  }
}

function createvaccine() {
  if (World.frameCount % 320 == 0) {
  var vaccine = createSprite(Math.round(random(50, width-50),40, 10, 10));
  vaccine.addImage(vaccineImg);
  vaccine.scale=0.3;
  vaccine.velocityY = 20
  vaccine.lifetime = 250;
  vaccineG.add(vaccine);
}
}

function createmask() {
  if (World.frameCount % 410 == 0) {
  var mask = createSprite(Math.round(random(50, width-50),40, 10, 10));
  mask.addImage(maskImg);
  mask.scale=0.3;
  mask.velocityY = 20
  mask.lifetime = 250;
  maskG.add(mask);
  }
}

  function createsanitiser(){
  if (World.frameCount % 530 == 0) {
  var sanitiser = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sanitiser.addImage(sanitiserImg);
  sanitiser.scale=0.3;
  sanitiser.velocityY = 20
  sanitiser.lifetime = 250;
  sanitiserG.add(sanitiser);
  }
}
  
 function createmonster(){
  if (World.frameCount % 530 == 0) {
  var monster = createSprite(Math.round(random(50, width-50),40, 10, 10));
  monster.addImage(monster1Img)
  monster.scale=0.3;
  monster.velocityY = 20
  monster.lifetime = 250;
  monsterG.add(monster);
  }
    

 } }