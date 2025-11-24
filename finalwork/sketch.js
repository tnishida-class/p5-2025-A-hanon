// 最終課題を制作しよう
let x,y,vy,walls;
const g=1;
const vyMax=20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = (1*width) / 3;
  y = height / 2;
  vy = 0;
  walls=[];
  

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
  background(160, 192, 255);
  const size = height * 0.05; 
  
  y += vy;
  vy += g;
  vy = constrain(vy, -vyMax, vyMax);
  y = constrain(y, 0, height-size/2);

  for(let i = 0; i < walls.length; i++){
    let w = walls[i];
    fill(0);
    rect(w.x, w.y, 70,w.size);
    w.x += w.vx;
    w.y += w.vy;
   
  }
  
    if(frameCount % 250 === 0) {
      let w = { x: width, y: random(-10,height-50) , vx: -2, vy: 0, size:random((2*height)/3,(5*height)/7)}
    walls.push(w); 
  }

  

 
  fill(255);
  ellipse(x, y, size, size);
}

function keyPressed(){
  if(key ==" "){vy=-20}

  if(keyCode== ENTER ){
    x = (1*width) / 3;
    y = height / 2;
    vy = 0;
  }
}



