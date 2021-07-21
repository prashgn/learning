class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, false, false]; // top, right , bottom, left
    this.visited = false;

    this.index = function (i, j) {
      if(i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return -1 ;
      }
      return i + j * cols;
    };

    this.show = function () {
      var x = this.i * w;
      var y = this.j * w;
      stroke(255);
      if (this.walls[0]) {
        line(x, y, x + w, y); //top
      }
      if (this.walls[1]) {
        line(x + w, y, x + w, y + w); //right
      }
      if (this.walls[2]) {
        line(x + w, y + w, x, y + w); //bottom
      }
      if (this.walls[3]) {
        line(x, y + w, x, y); //right
      }

      if (this.visited) {
        fill(255, 0, 255, 100);
        rect(x, y, w, w);
      }
    };

    this.checkNeigbors = function () {
      var neigbors = [];

      var top = grid[this.index(i, j - 1)];
      var right = grid[this.index(i + 1, j)];
      var bottom = grid[this.index(i, j + 1)];
      var left = grid[this.index(i - 1, j)];

      if (top && !top.visited) {
        neigbors.push(top);
      }
      if (right && !right.visited) {
        neigbors.push(right);
      }
      if (bottom && !bottom.visited) {
        neigbors.push(bottom);
      }
      if (left && !left.visited) {
        neigbors.push(left);
      }

      if (neigbors.length > 0) {
        return neigbors[floor(random(0,neigbors.length))];
        //return neigbors[0];
      } else {
        return undefined;
      }
    };
  }
}
