function Tree() {
  this.root = null;
}
Tree.prototype.addVal = function (val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
};

Tree.prototype.traverse = function () {
  this.root.visit();
};

Tree.prototype.search = function (val) {
  var found = this.root.search(val);
  return found;
};
