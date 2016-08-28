Array.prototype.isSubsetOf = function(originalArray) {
  var isSubset = true;
  for(var i=0;i<this.length;i++) {
    if(!(originalArray.includes(this[i]))) {
      isSubset = false;
    }
  }
  return isSubset;
};