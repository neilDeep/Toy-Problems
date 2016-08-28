function evenOccurence (arr) {
  //count the elements in the array
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    if(!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      count[arr[i]] = count[arr[i]]++;
    }
  }

  //return the first element with an even count
  for (var j = 0; j < arr.length; j++) {
    if (count[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }

  //if none of the counts are even
  return null;
}