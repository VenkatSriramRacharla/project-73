const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(700,320);
  box2 = new Box(700,220);
  box3 = new Box(900,320);
  box4 = new Box(900,220);
  box5 = new Box(800,120);
}

function draw() {
  background(0);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();  
}