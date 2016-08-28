Tree.prototype.countLeaves = function () {
  // TODO: implement me!
  var count = 0;

  function recurse(node) {
      if(node.children.length === 0) {
        count++;
      } else {
        for(var i=0;i<node.children.length;i++) {
          recurse(node.children[i]);
        }
      }
  }

  recurse(this);
  return count;
}