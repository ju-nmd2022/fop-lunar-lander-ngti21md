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
  moon();
  fuelFunc ();
  
}

function keyPressed (){
  if (keyCode == 'ENTER') {
    start ();
  }
}

function start(){
  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(60);
  text("Lunar Lander", x, y + 20);  
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

function landing() {
  if (key == ' ') {
    fuel -= 2;
    p = 2;
    ship.rect.y -= v;
  }
  else {
    p = 5;
  }
}

function fuelFunc () {
  textSize (30);
  text ("Fuel: " + fuel , x - 280, y - 50);
}













