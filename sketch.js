
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600,580,1200,20);
box1=new Box(1000,570,200,20);
box2=new Box(900,500,20,150);
box3=new Box(1100,500,20,150);
ball=new Ball(300,200,30);	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 ball.display();
}

function keyPressed(){
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}

