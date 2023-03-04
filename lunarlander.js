const px = 300,
      py = 100;

function setup() {
  createCanvas (600, 900);
  noLoop();
}
function draw() {
  space();
  moon();
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
  rect (0, height * 0.75, width, height * 0.25);

  push ();
  fill (160, 160, 160);
  Stroke ();
  ellipse (300, 300, 80, 20);
  pop ();
} 



