Tree.prototype.DFSelect = function(filter) {
  //YOUR CODE HERE

  // Create Values Array
  var values = [];
  // Define Recursive Function
  var recurse = function(tree, depth) {
    // Base Case: If tree.value meets filter requirements
    if (filter(tree.value, depth)) {
      // Add tree.value into Values Array
      values.push(tree.value);
    }
    // Else, move on to the next tree.value, increase depth
    for (var i = 0; i < tree.children.length; i++) {
      recurse(tree.children[i], depth + 1);
    }
  };
  // Start Recursion with the Tree that's calling the DFSelect method.
  recurse(this, 0);
  // Return Values Array
  return values;
};