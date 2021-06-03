var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bg;
var dustbinImg;
var sling1

function preload()
{
	bg = loadImage("cbRoom.png");
  dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(150, 500, 10);   

 //dustbin  
   dustbinRight = new Dustbin(639, 540, 10, 150);
   dustbinMiddle = new Dustbin(750, 600, 200, 10);
   dustbinLeft = new Dustbin(851, 540, 10, 150);

 //ground
   ground = new Ground(600, height-35, 1200, 15); 

   sling1= new SlingShot(paper1.body,{x:400,y:350});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

//displaying
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();
  
  ground.display();

  sling1.display();
  image(dustbinImg,505,430,200,238);

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
/*
function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-15});
 }
}*/