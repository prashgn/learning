function Blob(x,y,r) {
  this.pos = createVector(x,y);
  this.r = r;

  this.show = function(){
    fill(255);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2); 
  }
  this.eats = function(other){
      var d = p5.Vector.dist(this.pos,other.pos);
      if(d< this.r + other.r ){
        var sum = PI * this.r * this.r + PI * other.r * other.r;
        this.r = sqrt(sum/PI);   
        //this.r += other.r*0.2;
          return true;
      }
      return false;
  }

  this.update = function(){
    var vel = createVector(mouseX-width/2,mouseY-height/2);
    //vel.sub(this.pos);
    vel.setMag(3);
    this.pos.add(vel);
  }
  
}
