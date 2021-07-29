class Branch {
  constructor(begin,end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    
    this.show = function () {
      stroke(255);
      line(this.begin.x,this.begin.y,this.end.x,this.end.y);
    };
    // to have a shakky tree
    this.jitter = function () { 
      this.end.x += random(-0.25,0.25); 
      this.end.y += random(-0.25,0.25);
    };

    this.branchA = function () {
      var dir = p5.Vector.sub(this.end,this.begin);
      dir.rotate(PI/6); // this value is different just to tilt the screen
      dir.mult(0.67);
      var newEnd = p5.Vector.add(this.end,dir);
      var right = new Branch(this.end,newEnd);
      return right;
    };

    this.branchB = function () {
      var dir = p5.Vector.sub(this.end,this.begin);
      dir.rotate(-PI/4);
      dir.mult(0.67);
      var newEnd = p5.Vector.add(this.end,dir);
      var left = new Branch(this.end,newEnd);
      return left;
    };
  }
}
