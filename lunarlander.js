
const x = 300,
      y = 400;

function setup() {
  createCanvas (800, 900);
  noLoop();
}
function draw() {
    for(let y = 0; y < 520; y++) {
        let randomSize = random(0.5, 3);
        let randomX = random(width);
        let randomY = random(height);
        noStroke();
        let space = map (randomSize, 0.5, 3, 50, 200);
        fill (255,255,255,space);
        ellipse (randomX, randomY, randomSize, randomSize);
    }
}









      
