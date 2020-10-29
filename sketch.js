// written ontop of Daniel Shiffman's Mathematical Roses example
// his video: https://youtu.be/f5QBExMNB1I


var d = 1;
var n = 5;
var k = n / d;
var flowers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<24;i++){
    let y = random(-400, -20)
    let x = random(0, width)
    flowers[i] = new flower(x, y)
  }
}

function draw() {
 
  background(255, 222, 255);
  for(var i=flowers.length-1;i>0;i--){
    flowers[i].show()
    flowers[i].update()
    if(flowers[i].y > width+80){
      flowers[i].y = random(-200, -20)
    }
  }
  
  // noLoop();
}

function flower(x,y){
  this.x = x
  this.y = y
  this.a = 0
  this.aspeed = random(0.02, 0.05)
  this.yspeed = random(1, 3)
  this.show = function(){
    push();
    translate(this.x, this.y);
    beginShape();
    fill(255, 255,255);
    rotate(this.a)
    // noFill();
    stroke(200);
    for (var a = 0; a < TWO_PI * d; a += 0.02) {
      var r = 80 * cos(k * a);
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    this.a+=this.aspeed
    ellipse(0, 0, 10, 10)
    pop();
    
  }
  this.update = function(){
    this.y+=this.yspeed
    this.x+=0.003
  }
}