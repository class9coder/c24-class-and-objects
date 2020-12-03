const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground,box1;
var box2;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,390,800,20);
    
    box1 = new Box(230,100,80,100);
    box2 = new Box(200,140,50,100);
    
}

function draw(){
    background("#ff8300");
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}