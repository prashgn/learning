function Branch(parent,pos,dir) {
  this.parent = parent; 
  this.pos = pos;
  this.dir = dir;
  this.count = 0;
  this.orgDir = this.dir.copy();
  this.len = 5;
  
  this.reset = function(){
    this.dir = this.orgDir.copy();
    this.count = 0;
  } 

  this.next = function(){
    var nextDir = p5.Vector.mult(this.dir,this.len);
    var nextPos = p5.Vector.add(this.pos,nextDir);
    var nextBranch = new Branch(this,nextPos,this.dir.copy());
    return nextBranch; 
  }

  this.show = function(){
    if(this.parent != null){
      stroke(255);
      line(this.pos.x,this.pos.y,this.parent.pos.x,this.parent.pos.y);
    } 
  }

}
