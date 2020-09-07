const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;

var engine, world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(240,790,480,10);


}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground1.display();
  drawSprites();
}