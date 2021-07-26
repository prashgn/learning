class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; // top -0, right - 1 , bottom - 2, left - 3
    this.visited = false;

    this.removeWalls = function (current, next) {
      var x = current.i - next.i;
      if (x === 1) {
        current.walls[3] = false; //remove right wall
        next.walls[1] = false; //remove left wall
      } else if (x === -1) {
        current.walls[1] = false; //remove right wall
        next.walls[3] = false; //remove left wall
      }

      var y = current.j - next.j;
      if (y === 1) {
        current.walls[0] = false; //remove top wall
        next.walls[2] = false; //remove bottom wall
      } else if (y === -1) {
        current.walls[2] = false; //remove bottom wall
        next.walls[0] = false; //remove top wall
      }
    };

    this.highLight = function () {
      var x = this.i * w;
      var y = this.j * w;
      noStroke();
      fill(0, 0, 255, 100);
      rect(x, y, w, w);
    };

    this.index = function (i, j) {
      if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
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
        noStroke();
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
        return neigbors[floor(random(0, neigbors.length))];
        //return neigbors[0];  //no random selection just the first one
      } else {
        return undefined;
      }
    };
  }
}
