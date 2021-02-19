var boy,backgroundImg,boyImg,back;
var ground,car,bike,power,carImg,bikeImg,powerImg;

function preload() {
    backgroundImg = loadImage("sprites/BG.png");
    boyImg = loadImage("sprites/BOY.png");
    carImg = loadImage("sprites/car.jpg");
}

function setup(){
    var canvas = createCanvas(1200,700);
    back = createSprite(600,300,1200,700);
    back.addImage(backgroundImg);
    back.scale =3.5;

    boy = createSprite(70,580);
    boy.addImage(boyImg);
    boy.scale =0.5;


    ground = createSprite(600,690,1200,20);
    ground.visible=false;

    
}



function draw(){
    background("black");

    if(back.x<500){
        back.x = 600;
    }
    back.velocityX = -6;

    if(keyDown("space")){
    boy.velocityY = -10;
    }
    boy.velocityY=boy.velocityY+0.8;

    boy.collide(ground);

    spawnCars();

    drawSprites();

}

function spawnCars(){
    if(frameCount%180===0){
        car = createSprite(1200,650);
    car.addImage(carImg);
    car.scale = 0.5;
    car.velocityX = -6;
    }
}


function spawnCars(){
    if(frameCount%180===0){
        car = createSprite(1200,650);
    car.addImage(carImg);
    car.scale = 0.5;
    car.velocityX = -6;
    }
}

