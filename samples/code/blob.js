class Blob {
  constructor(x, y){
    this.pos = new createVector(x, y); 
    this.r = random(120,400);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2,5));

    this.update = function () {
      this.pos.add(this.vel);
      if(this.pos.x > width || this.pos.x < 0){
        this.vel.x *= -1;
      }
      if(this.pos.y > height || this.pos.y < 0){
        this.vel.y *= -1;
      }
    }

    this.show = function () {
      noFill();
      stroke(255);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };  
  }
}

