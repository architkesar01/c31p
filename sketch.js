const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var ground
var ball,balli
var shot
var backgroundImg
var score=0


function preload()
{
  balli = loadImage("polygon.png");
  getbgImg()
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2-10, height/2+150, 200, 20);
 

  box1 = new Box(width/2, height/2+120, 30, 40);
  box2 = new Box(width/2, height/2+120, 30, 40);
  box3 = new Box(width/2-45, height/2+120, 30, 40);
  box4 = new Box(width/2+45, height/2+120, 30, 40);
  box5 = new Box(width/2-75, height/2+120, 30, 40);
  box6 = new Box(width/2+75, height/2+120, 30, 40);
  box7 = new Box(width/2-105, height/2+120, 30, 40);
  box8 = new Box(width/2+15, height/2+80, 30, 40);
  box9 = new Box(width/2-15, height/2+80, 30, 40);
  box10 = new Box(width/2+45, height/2+80, 30, 40);
  box11 = new Box(width/2-45, height/2+80, 30, 40);
  box12 = new Box(width/2-75, height/2+80, 30, 40);
  box13 = new Box(width/2-15, height/2+40,30, 40);
  box14 = new Box(width/2+15,height/2+40,30, 40);
  box15 = new Box(width/2-45, height/2+40,30, 40);
  box16 = new Box(width/2-15, height/2+10, 30, 40);


  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  shot = new Shot(this.ball,{x:200,y:100});
}
function draw() {
  if(backgroundImg)
  background(backgroundImg);

  textSize(30)
  fill("yellow")
  text("score :"+score,width-300,50)
    Engine.update(engine);
    ground.display();
  
    box1.display();
    box1.score()
    box2.display();
    box2.score()
    box3.display();
    box3.score()
    box4.display();
    box4.score()
    box5.display();
    box5.score()
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
   // ball.display(); 
  imageMode(CENTER);
  image(balli, ball.position.x, ball.position.y, 40, 40);
    shot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
shot.re();
}
function keyPressed(){
  if(keyCode===32){
      shot.attach(this.ball)
    }
  }
  async function getbgImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsetype=await response.json()
    console.log(responsetype)
    var dt = responsetype.datetime
    console.log(dt)
    var hour= dt.slice(11,13)
    console.log(hour)
    if(hour<=6&&hour>=16){
        bg="bg2.jpg"
    }
    else{
        bg="bg.png"
    }
    backgroundImg=loadImage(bg)

}