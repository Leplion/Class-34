const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball, rope

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,500,50,50);
    box2 = new Box(600,450,50,50);
    box3 = new Box(600,400,50,50);
    box4 = new Box(600,350,50,50);
    box5 = new Box(600,300,50,50);
    box6 = new Box(600,250,50,50);
    box7 = new Box(500,200,50,50);
    box8 = new Box(500,150,50,50);
    box9 = new Box(500,100,50,50);
    box10 = new Box(500,50,50,50);

    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body, {x:500, y:50});

    ground = new Ground(500,height,1800,20)
}

function draw(){
    background("white");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    rope.display();
    ground.display();
}