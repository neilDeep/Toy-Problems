var makeHashTable = function() {
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value) {
    //get index from hash function
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //create bucket if it doesn't already exist
    storage[index] = storage[index] || [];
    //remove identical key if it already exists
    this.remove(key);
    //add key value pair to bucket
    storage[index].push([key,value]);
  };

  table.retrieve = function(key) {
    //get index from hash function
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      //find the key in the bucket and return corresponding value
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };

  table.remove = function(key) {
    //get index from hash function
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      //find the key in the bucket and remove the key value pair
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index].splice(i,1);
        }
      }
    }
  }

  return table;
};

//hash function
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};