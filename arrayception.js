function arrayception (array) {
  var deepestN = 0;

  // recursive function which keeps track of level and checks if a non-array value is present
  var checkArray = function(array, n) {
    for (var i = 0; i < array.length; i++) {
      //check if the current element is a non empty array
      if (Array.isArray(array[i]) && array[i].length > 0) {
        //increment the level and call checkArray
        checkArray(array[i], n+1);
      //check if the element is a non-array value
      } else if (!Array.isArray(array[i])) {
        //increment the current level and update the max level if necessary
        deepestN = Math.max(n+1, deepestN);
      }
    }
  };
  // start recursion by passing in the input array and making n = 0
  checkArray(array,0);
  return deepestN;
}