let x = 300,
    y = 100,
    gravity = 1;
let p = 5, //position
    v, //speed
    h = height,
    g,
    fuel = 60,
    engine;      

function setup() {
  createCanvas (600, 700);
  noLoop();
}
function draw() {
  keyPressed ();
  space();
  start ();
  moon();
   
}

function start(){
  fill(255, 255, 255);
  textAlign(CENTER);
  push();
  textSize(60);
  text("Lunar Lander", x, y + 50);
  pop();
  textSize(30);
  text( "Click SPACE to play", x, y + 150);
}

function keyPressed (){
  if (key == ' ') {
    ship ();
    fuelFunc ();
    landing();
  }
}

function space() {
    for(let i = 0; i < 500; i++) {
        let randomSize = random(0.5, 3);
        let randomX = random(width);
        let randomY = random(height);
        noStroke();
        let space = map (randomSize, 0.5, 3, 50, 200);
        fill (255,255,255,space);
        ellipse (randomX, randomY, randomSize, randomSize);
    }
}
function moon() {
  fill (160, 160, 160);
  rect (0, h * 0.75, width, h * 0.25);

  push ();
  translate (50, 500);
  fill (160, 160, 160);
  ellipse (0, 0, 80, 20);
  pop ();
} 
 function ship() {
  // translate (x, y);
  rect (x, y, 40); 
}

//ref: https://editor.p5js.org/skallywag/sketches/ByydCKx3m
function landing() {
  if (keyIsDown(UP_ARROW)) {
    fuel -= 2;
    p = 2;
    ship.rect.y -= v;
  }
  else {
    p = 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    fuel -= 1;
    p = 2;
    ship.rect.x -= v;

  }
  if (keyIsDown(RIGHT_ARROW)) {
    fuel -= 1;
    p = 2;
    ship.rect.x += v;
  }
}

function fuelFunc () {
  textSize (20);
  text ("Fuel: " + fuel , x - 280, y - 50);
  if (fuel > 0) {
   landing ();
  }
}

function obstacles () {
  
}
 function result () {
  if (fuel == 0) {
    gravity = 0;
    v = 0;
    fuel = 0;
    
    push();
    textSize (60);
    text ("YOU LOST", x, y + 200);
  }
}













