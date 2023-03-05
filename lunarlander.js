let x = 300,
    y = 100,
    gravity = 10;
    yship = 50;
    xship = 300;
let v = 9, //velocity
    // velx = 5, 
    fuel = 100,  
    gameActive = 0,
    won = 0,
    lost = 0;
     

function setup() {
  createCanvas (600, 500);
} 

function landscape (){
  background(159, 189, 237);
  
  // sky
  for(var i=0; i<=400; i+=5){
    strokeWeight(50);
    stroke(255*2-i*2,128*2-i*2,64*2);
    line(0,400-i*2,width,400-i*2); 
  }

  // ground
  noStroke();
  fill(0,100,0);
  rect(0,400,width,200);
  
  // tree1
  fill(67, 51, 8); 
  rect(95,400,10,30); 
  fill(23, 69, 29);
  ellipse(90,400,30,30);
  ellipse(100,390,30,40);
  ellipse(110,405,40,30);

  // tree2
  push();
    scale(1.75);
    fill(67, 51, 8); 
    rect(200,215,10,40); 
    fill(23, 69, 29);
    ellipse(200,210,30,30);
    ellipse(210,200,30,30);
    ellipse(195,195,20,20);
  pop();

  // tree3
  push();
    fill(67, 51, 8); 
    rect(590,340,10,80); 
    fill(23, 69, 29);
    ellipse(590,330,50,40);
    ellipse(600,295,60,60);
  pop();
} 

function ship() {
strokeWeight (5);
push ();
fill (255, 0, 0);
triangle (xship, yship - 10, xship - 50, yship + 30, xship + 50, yship + 30);
pop ();

push ();
fill (126, 126, 126);
ellipse (xship, yship, 60, 70);
pop ();

push ();
fill (255, 255, 255);
ellipse (xship, yship - 10 , 30);
pop ();
yship = yship + gravity;   
} 

function draw() {
  clear();   
  landscape ();
  examine ();
  // restart ();
}

//ref: https://editor.p5js.org/skallywag/sketches/ByydCKx3m
function landing() {
  if (keyIsDown(UP_ARROW)) {
    yship -= v;   
    fuel -= 3;  
    // velx = 1;
  }
  else {
    velx = 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xship -= v; 
    fuel -= 1;
    // velx = 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xship += v;
    fuel -= 1;
    // velx = 1;
  }
}

 function result () {
  if (fuel <= 0 && yship < 415 ) {    
    yship = 415; 
    gravity = 0;     
    v = 0; 
    fuel = 0;
    lost = 1;
    push();
    textAlign (CENTER);   
    textSize (60);
    fill (255, 255, 255);
    text ('YOU LOST!', 300, 200);   
    pop();  
  } 
  if (fuel > 0 && yship >= 415 &&
      ((xship > 0 && xship < 73) || 
      (xship > 130 && xship < 320) || 
      (xship > 395 && xship < 560))) {             
    yship = 415; 
    gravity = 0;
    v = 0;
    won = 1;
    push();
    textAlign (CENTER);     
    textSize (60);
    fill (255, 255, 255);
    text ('YOU WON!', 300, 200);     
    pop();  
  }
}   

function engine (){ 
  textSize(24);
  fill (255, 255, 255);
  text("fuel: " + fuel, 10, 30);
}

function start(){
  fill(255, 255, 255);
  textAlign(CENTER);
  push();
  textSize(60);
  text("THE GAME", x, y + 50);
  pop();
  textSize(30); 
  text( "Press SPACE to play", x, y + 150);  
}

function restart(){
  if ((won == 1 || lost == 1) && gameActive == 1) {
    keyPressedRestart ();
    push ();
    fill (255, 255, 255);
    textAlign (CENTER);
    textSize (30);
    text ("Press ENTER to restart", x, y + 160);  
    pop ();
    // gameActive = 0;
}
function keyPressedRestart (){
    if (keyCode == '13') {  
      gameActive = 0;
    }
  }
}

function keyPressed (){ 
  if (gameActive === 0) {
    keyCode = ' ';
    gameActive = 1;  
  } 
}

function examine (){
if (gameActive == 1) {
  engine ();
  ship();
  landing(); 
  result ();
// if ( won == 1 || lost == 1) {
  restart ();
// }
}
else {start();}
}
