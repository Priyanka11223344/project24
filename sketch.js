const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammar1,engine,world;
var rubber;
var ground1;
var rubber1,diamond;
var circle1,circle2,circle3,circle4,circle5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  hammar1 = new HammarClass(400,300,100,50);
  ground1 = createSprite(400,690,800,20);
  ground1.shapeColor = "brown";

  rubber1 = createSprite(700,645,80,70);
  diamond = createSprite(300,645,80,70);
  circle1 = createSprite(100,670,20,20);
  circle2 = createSprite(50,670,20,20);
  circle3 = createSprite(10,670,20,20);
  circle4 = createSprite(200,670,20,20);
  circle5 = createSprite(150,670,20,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
 hammar1.display();
 ground1.display();

drawSprites();
}