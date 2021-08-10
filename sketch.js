var iss, CrewDragon;
var hasDocked = 0;

function preload() {
  bag = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  spaceCraft = loadImage("spacecraft1.png");
  spaceCraft2 = loadImage("spacecraft2.png")
  spaceCraft3 = loadImage("spacecraft3.png")
  spaceCraft4 = loadImage("spacecraft4.png")
  Successbg = loadImage("successbg.jpg")

}

function setup() {
  createCanvas(900, 600);
  bg = createSprite(300,200,20,20);
  bg.addImage(bag);
  bg.scale = 2;
  CrewDragon = createSprite(330,400,20,20);
  iss = createSprite(400,250)
  iss.addImage(issImage)
  CrewDragon.addImage(spaceCraft);
  CrewDragon.scale = 0.25;
}

function draw() {
//background
    background(0);
    CrewDragon.addImage(spaceCraft);

//docking
console.log(hasDocked);
console.log(CrewDragon.x);

  if(CrewDragon.y === 332){
    if(CrewDragon.x > 325){
      if(CrewDragon.x < 345){
        hasDocked = 1;
      }
    }
  }

  if(hasDocked === 0){
    CrewDragon.x = CrewDragon.x + random(1,-1);
    //Movement
  if(keyDown("UP_ARROW")){
    CrewDragon.y = CrewDragon.y - 1;
    CrewDragon.addImage(spaceCraft2);
  }
  if(keyDown("LEFT_ARROW")){
    CrewDragon.x = CrewDragon.x - 1;
    CrewDragon.addImage(spaceCraft3);
  }
  if(keyDown("RIGHT_ARROW")){
    CrewDragon.x = CrewDragon.x + 1;
    CrewDragon.addImage(spaceCraft4);
  }
  if(keyDown("DOWN_ARROW")){
    CrewDragon.y = CrewDragon.y + 1;
  }
  }

  if(hasDocked === 1){
    bg.addImage(Successbg)
  }



  drawSprites();
}