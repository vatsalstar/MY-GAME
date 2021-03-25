var boy,backgroundImg,boyImg,back;
var ground,car,bike,power,carImg,bikeImg,powerImg;
var carGroup,bikeGroup;
var gameState = "Play";
var Gameover;
var jump,go,back;
var score;

function preload() {
    backgroundImg = loadImage("sprites/BG.png");
    boyImg = loadImage("sprites/boy.png");
    carImg = loadImage("sprites/car.png");
    bikeImg = loadImage("sprites/bike.png");
    Gameover = loadImage("sprites/Gameover.jpg");
    jump = loadSound("jump.mp3");
    go = loadSound("gameover.mp3");
    back = loadSound("back.mp3");
}

function setup(){
    var canvas = createCanvas(1200,700);
    back = createSprite(600,300,1200,700);
    back.addImage(backgroundImg);
    back.scale =3.5;

    boy = createSprite(70,580);
    boy.addImage(boyImg);
    boy.scale =0.3;


    ground = createSprite(600,690,1200,20);
    ground.visible=false;

    carGroup = createGroup();
    bikeGroup = createGroup();

    score = 0;
    
}



function draw(){
    background("black");
    back.loop;

    if (gameState === "Play"){

        score=score+Math.round(frameCount/100);
      
    if(back.x<500){
        back.x = 600;
    }
    back.velocityX = -4;


    if(boy.x>1150){
        boy.x=70;

    }
    boy.velocityX = 4;

    if(keyDown("space")&&boy.y>=400){
    boy.velocityY = -10;
    jump.play();
    }
    boy.velocityY=boy.velocityY+0.8;
    
    spawnCars();
    spawnBike();

    if (carGroup.isTouching(boy)||bikeGroup.isTouching(boy)){
        gameState = "End";
        go.play();
    }
  
    }

    else if(gameState==="End"){
        back.velocityX=0;
        boy.velocityY=0;
        back.visible=false;
        boy.visible=false;
        carGroup.setVelocityXEach(0);
        bikeGroup.setVelocityXEach(0);
        carGroup.destroyEach();
        bikeGroup.destroyEach();

        image(Gameover,0,0,1200,700);

    }

    boy.collide(ground);

    drawSprites();

    fill("white");
    textSize(40);
    text("SCORE:"+score,900,50);

}

function spawnCars(){
    if(frameCount%100===0){
        car = createSprite(1200,650);
    car.addImage(carImg);
    car.scale = 0.5;
    car.velocityX = -6;
    carGroup.add(car);
    }
}


function spawnBike(){
    if(frameCount%200===0){
        bike = createSprite(1200,650);
    bike.addImage(bikeImg);
     bike.scale = 0.3;
    bike.velocityX = -6;
    bikeGroup.add(bike);
    }
}

