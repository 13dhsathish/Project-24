const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var rubber;
var stone;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	
	ground = new Ground(600, height, width, 20);

	var hammer = new Hammer(100,100);
	var stone = new Stone(710, 790);
	var rubber = new Stone(700, 240, 70, 70);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
	
  drawSprites();
 
}



