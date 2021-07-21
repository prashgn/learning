class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = function () {
      noStroke();
      fill(150, 0, 255);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
    this.move = function () {
      this.y = this.y - 5;
    };
    this.evaporate = function () {
      this.toDelete = true;
    };

    this.hits = function (flowerobj) {
      var d = dist(this.x, this.y, flowerobj.x, flowerobj.y);
      if (d < this.r + flowerobj.r) {
        return true;
      } else {
        return false;
      }
    };
  }
}
