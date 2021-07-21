class Cell {
  constructor(p, r, c) {
    if (p) {
      this.position = p.copy();
    } else {
      this.position = createVector(random(width), random(height));
    }

    this.r = r || 80;
    this.c = c || color(random(100, 255), 0, random(100, 255),100);

    this.show = function () {
      noStroke();
      fill(this.c);
      rectMode(CENTER);
      ellipse(this.position.x, this.position.y, this.r, this.r);
    };

    this.mitosis = function () {
      this.position.x += random(-10,10);
      var cell = new Cell(this.position, this.r*0.8, this.c);
      return cell;
    };

    this.move = function () {
      var v = p5.Vector.random2D();
      this.position.add(v);
    };

    this.clicked = function (x, y) {
      var dis = dist(this.position.x, this.position.y, x, y);
      if (dis < this.r) {
        return true;
      } else {
        return false;
      }
    };
  }
}
