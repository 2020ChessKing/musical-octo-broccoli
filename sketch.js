var width, height;
var angle, depth;
var mapX, mapY;
var model1;

function preload()
{
  // model1 = loadModel('car.obj', true);
}

function setup()
{
  width = windowWidth;
  height = windowHeight;

  createCanvas(width, height, WEBGL);

  angle = 0;
  depth = 0;

  mapX = map(mouseX, 0, width, 0, 360);
  mapY = map(mouseY, 0, width, 0, 360);
}

function draw() 
{
  background(255);

  camera(0, 0, 0, 0, 0, 0, 0, 1, 0);

  mapX = map(mouseX, 0, width, 0, 360);
  mapY = map(mouseY, 0, width, 0, 360);

  // camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);  // pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 100);

  pointLight(255, 255, 255, 0, 0 , 7000)

  fill(0, 0, 255);
  noStroke();
  // rotateX(angleY);
  push();
  translate(0, 0, 0)
  // rotateX(angle);
  rotateY(angle);
  // rotateZ(angle);
  ambientMaterial(255);
  sphere(100);
  pop();

  ambientMaterial(255);
  translate(0, 100, 0)
  // rotateX(angle);
  rotateY(angle);
  // rotateZ(angle)
  box(1000, 20, 1000)

  if(keyIsDown(UP_ARROW))
  {
    depth += 10;
  }

  if(keyIsDown(DOWN_ARROW))
  {
    depth -= 10;
  }

  angle = ( mapX - 200 ) * 0.2;
  console.log(mouseX, mouseY);
  box(100);
}