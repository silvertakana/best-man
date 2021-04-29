
var raindrops = [],maxdrops = 100,boy = [],Umbrela,thunder = [],walk=7,thunderani = 0,batAnimation,bat;
function preload(){
    for (let index = 0; index < 8; index++) {
        boy[index] = loadImage("images/Walkingboy/walking_"+(index+1)+".png");
        
    }
    for (let index = 0; index < 4; index++) {
        thunder[index] = loadImage("images/thunderbolt/"+(index+1)+".png");
    }
   
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
   engine = Engine.create();
	world = engine.world;
    /*for(let i = 0;i<maxdrops;i++){
        raindrops[i] = new rain(random(width));
    }*/
    Umbrela = new umbrela(width/2,height-300,110,10)
    //Engine.run(engine);
    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
}

function draw(){
    background(100);
    Engine.update(engine,20);
    console.log()
   // raindrops[0].display()
   push()
   imageMode(CENTER)
    image(boy[round(walk)],width/2,height-200,300,300);
   pop()
    for (let index = 0; index < raindrops.length; index++) {
        raindrops[index].display();
    }
    if(raindrops.length<maxdrops){
        raindrops[raindrops.length] = new rain(random(width),0)
    }
    //Umbrela.display()
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
    }
    // console.log(bat)
    image(thunder[round(thunderani)],random(width),0,500,500);
    walk -= .3;
    if(round(walk)<0){
        walk = 7
    }
    thunderani += .1;
    if(round(thunderani)>3){
        thunderani = 0
    }

    drawSprites()
}   

