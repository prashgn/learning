function Bird() {
  this.x = 64;
  this.y = height/2;
  this.gravity = 0.9;
  this.velocity = 0;
  this.lift = -12;

  this.show = function(){
    fill(255);
    noStroke();
    ellipse(this.x,this.y,32,32); 
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;  
  }
  this.up = function(){
    this.velocity += this.lift;
  }

}
