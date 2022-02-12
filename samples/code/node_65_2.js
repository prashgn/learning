function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.visit = function (parent) {
  if (this.left != null) {
    this.left.visit(this);
  }

  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  /*
  if (check[this.x + " " + this.y] == undefined) {
    check[this.x + " " + this.y] = 1;
  } else {
    check[this.x + " " + this.y] = check[this.x + " " + this.y] + 1;
    this.x = this.x + 25;
  }
*/
  text(this.value, floor(this.x), floor(this.y));
  stroke(255);
  noFill();
  ellipse(floor(this.x), floor(this.y - 3), 20, 20);

  if (parent.x == this.x && parent.y == this.y) {
  } else {
    line(parent.x, parent.y + 7, this.x, this.y - 13);
  }

  if (this.right != null) {
    this.right.visit(this);
  }
};

Node.prototype.search = function (val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
};

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;

      /* -- */
      if (check[this.x - 100 + " " + (this.y + 75)] == undefined) {
        check[this.x - 100 + " " + (this.y + 75)] = 1;
        this.left.x = this.x - 100;
        this.left.y = this.y + 75;
      } else {
        if (check[this.x - 100 - 25 + " " + (this.y + 75)] == undefined) {
          check[this.x - 100 - 25 + " " + (this.y + 75)] = 1;
          this.left.x = this.x - 100 - 25;
          this.left.y = this.y + 75;
        }
      }
      /*
      this.left.x = this.x - 100;
      this.left.y = this.y + 75; */
      //console.log(  this.left.value + "  <-  " + this.left.x + "  " + this.left.y + "  "     );
      //console.log(check);
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;

      if (check[this.x + 100 + " " + (this.y + 75)] == undefined) {
        check[this.x + 100 + " " + (this.y + 75)] = 1;
        this.right.x = this.x + 100;
        this.right.y = this.y + 75;
      } else {
        if (check[this.x + 100 + 25 + " " + (this.y + 75)] == undefined) {
          check[this.x + 100 + 25 + " " + (this.y + 75)] = 1;
          this.right.x = this.x + 100 + 25;
          this.right.y = this.y + 75;
        }
      }
      //console.log(     this.right.value + "  ->  " + this.right.x + "  " + this.right.y  + "  "       );
      //console.log(check);
      /*
      this.right.x = this.x + 100;
      this.right.y = this.y + 75; */
    } else {
      this.right.addNode(n);
    }
  }
};
