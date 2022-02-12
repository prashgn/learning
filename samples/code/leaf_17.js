function Leaf() {
  this.pos = new createVector(random(width), random(height-100));
  this.reached = false;

  this.show = function(){
    fill(255);
    noStroke();
    ellipse(this.pos.x,this.pos.y,4,4); 
  }

}
