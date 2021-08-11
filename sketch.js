const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ball;
var blower,blowerp;
var blowbtn;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine=Engine.create();
  world=engine.world;

  ball=Bodies.circle(width/2+100,height/2,75,{
    isStatic:true
  });
  World.add(world,ball);

  blower=Bodies.rectangle(width/2+100,height-100,100,50,{
    isStatic:true
  })  
  World.add(world,blower);

  blowerp=Bodies.rectangle((width/2)-50,height-75,200,15,{
    isStatic:true
  })  
  World.add(world,blowerp);

  blowbtn=createButton("  Blow!  ");
  blowbtn.position(100,100);
  blowbtn.mouseClicked(blow);
  blowbtn.style("background-color:violet");

}

function draw() {
  background(255,255,55);  

  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(CENTER);

  fill("red");
  ellipse(ball.position.x,ball.position.y,75,75);

  fill("brown");
  rect(blower.position.x,blower.position.y,100,100);
  rect(blowerp.position.x,blowerp.position.y,200,15);
  
}

function blow(){
  Body.setStatic(ball,false);
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.7});
}