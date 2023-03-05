let x = 300,
    my = 100,
    gravity = 1;
let p , //position
    v, //velocity
    isGameActive = true;
     

function setup() {
  createCanvas (600, 500);
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

// function keyPressed (){
//   if (key == ' ') {
//     ship ();
//     fuelFunc ();
//     landing();
//   }
// }

// function space() {  
//     // for(let i = 0; i < 500; i++) {
//     //     let randomSize = random(0.5, 3);
//     //     let randomX = random(width);
//     //     let randomY = random(height);
//     //     noStroke();
//     //     let space = map (randomSize, 0.5, 3, 50, 200);
//     //     fill (255,255,255,space);
//     //     ellipse (randomX, randomY, randomSize, randomSize);
//         // noLoop();
//     // }
// }
// function moon() {
//   fill (160, 160, 160);
//   rect (0, height * 0.75, width, height * 0.25);
// } 

function landscape (){
  background(159, 189, 237);// rgb  0-255
  
  // pretty sky
  for(var i=0; i<=400; i+=5){
    strokeWeight(5*2);
    stroke(255*2-i*2,128*2-i*2,64*2);
    line(0,400-i*2,width,400-i*2); // x,y,x,y
  }

  // Green Ground
  noStroke();
  fill(0,100,0);// rgb
  rect(0,400,width,200);
  
  // tree 1
  fill(67, 51, 8); // tree brown
  rect(95,400,10,30); // trunk
  fill(23, 69, 29);
  ellipse(90,400,30,30);// tree top
  ellipse(100,390,30,40);
  ellipse(110,405,40,30);

  // tree 2
  push();
    // translate(-40,-40);
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
  // translate (x, y);
  rect (x, my - 100, 40);

  my += 15;   
}

function draw() {
  // space();
  // moon();
  clear();
  landscape ();

   
}

//ref: https://editor.p5js.org/skallywag/sketches/ByydCKx3m
// function landing() {
//   if (keyIsDown(UP_ARROW)) {
//     fuel -= 2;
//     p = 2;
//     ship.rect.y -= v;
//   }
//   else {
//     p = 5;
//   }
//   if (keyIsDown(LEFT_ARROW)) {
//     fuel -= 1;
//     p = 2;
//     ship.rect.x -= v;

//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     fuel -= 1;
//     p = 2;
//     ship.rect.x += v;
//   }
// }

//  function result () {
//   if (fuel == 0) {
//     gravity = 0;
//     v = 0;
//     fuel = 0;
    
//     push();
//     textSize (60);
//     text ("YOU LOST", x, y + 200);
//   }
// }

