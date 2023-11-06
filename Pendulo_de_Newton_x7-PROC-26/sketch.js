
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5,bob6,bob7, roofObject
var rope1,rope2,rope3, rope4, rope5,rope6,rope7;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,150,230,20);
	bob1 = new bob(280,475,40)
	bob2 = new bob(320,475,40)
	bob3 = new bob(360,475,40)
	bob4 = new bob(400,475,40)
	bob5 = new bob(440,475,40)
	bob6 = new bob(480,475,40)
	bob7 = new bob(520,475,40)
	
	rope1=new rope(bob1.body,roofObject.body,-120)
	rope2=new rope(bob2.body,roofObject.body,-80)
	rope3=new rope(bob3.body,roofObject.body,-40)
	rope4=new rope(bob4.body,roofObject.body,0)
	rope5=new rope(bob5.body,roofObject.body,40)
	rope6=new rope(bob6.body,roofObject.body,80)
	rope7=new rope(bob7.body,roofObject.body,120)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  
    strokeWeight(4);
	rect(400,150,360,20)
	rect(230,375,20,430)
	rect(570,375,20,430)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}

	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:-45});
	}
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:-45});
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:-45});
	}
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45});
	}
}
