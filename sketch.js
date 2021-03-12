
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100, 600, 10);

	ground = new Ground(400, 680, 800, 20);
	
	rect1 = new Dustbin(550, 620, 20, 100);
	rect2 = new Dustbin(610, 660, 100, 20);
	rect3 = new Dustbin(670, 620, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();

  ground.display();

  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y: -15})
	}
  }



