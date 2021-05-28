const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground =new Ground(600,380,1200,20);

   
    box1 = new Box(700,330,70,70)
    box2 = new Box(900,330,70,70)
    pig1 = new Pig(800,330)
    log1 = new Log(800,250,400,20,PI)



}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
}