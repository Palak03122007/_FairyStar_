const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world;
var ground;
var bg;
var fairy, fairy_img;
var star_img, starbody;

function preload(){
  bg = loadImage("starnight.png");
  fairy = loadAnimation("fairy1.png","fairy2.png");
  star_img = loadImage("star.png");
}

function setup(){

  var canvas = createCanvas(900,900);

  engine=Engine.create();
  world=engine.world;

  bg_img = createSprite(450,450,10,10);
  bg_img.addImage("background",bg);
  bg_img.scale = 0.6;

  fairy_img = createSprite(200,700,10,10);
  fairy_img.addAnimation("fairyIsFlying",fairy);
  fairy_img.scale = 0.2;

  star = createSprite(700,70,10,10);
  star.addImage("starOne",star_img);
  star.scale = 0.4;

  var star_options={
    restitution:0.5,
    isStatic:true
  }

  starbody = Bodies.circle(700,70,20,star_options);
  World.add(world,starbody);

  Engine.run(engine);
}

function draw(){
  background(0,0,0);

  star.x = starbody.position.x;
  star.y = starbody.position.y;

  if(starbody.position.y > 635){
    Matter.Body.setStatic(starbody,true);
  }

  drawSprites();
}

function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    fairy_img.x = fairy_img.x + 20;
  }

  if(keyCode === LEFT_ARROW){
    fairy_img.x = fairy_img.x - 20;
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starbody,false);
  }

}