
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;


var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,150,50);
	
    ground=new Ground(600,370,1200,20);

	box1=new Box(1000,350,200,20);
	box2=new Box(1100,310,20,100);
	box3=new Box(900,310,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  
  ground.display();
  paper.display();
  
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-100});
	}
}



