const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var world, boy, slingObj;

function preload(){

	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 50, 30);
	mango2 = new mango(1000, 100, 30);
	mango3 = new mango(1080, 140, 30);
	mango4 = new mango(1190, 160, 30);
	mango5 = new mango(980, 210, 30);
	mango6 = new mango(900, 200, 30);
	mango7 = new mango(1130, 240, 30);
 
	stoneObj = new stone(235, 340, 30);

	//slingObj = new sling(boy.png.body,stoneObj.body);
	
	treeObj = new tree(1050, 580);

	groundObject = new ground(width/2, 600, width, 20);
	
	Engine.run(engine);

}

function draw() {

  background(230);      
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();

  //slingObj.display();

  groundObject.display();

  detectollision(stoneObj, mango1);
  detectollision(stoneObj, mango2);
  detectollision(stoneObj, mango3);
  detectollision(stoneObj, mango4);
  detectollision(stoneObj, mango5);
  detectollision(stoneObj, mango6);
  detectollision(stoneObj, mango7);
}

function keyPressed() {
  if (keyCode === 12){
	Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	launcherObject.attach(stoneObj.body);
  }
}

function detectollision(Lstone, Lmango){
	mangoBodyPosition = lmango.body.postion
	stoneBodyPosition = lstone.body.postion

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if (distance <= lmango.r + lstone.r){
			Matter.Body.setStatic(lmango.body, false)
		}
}