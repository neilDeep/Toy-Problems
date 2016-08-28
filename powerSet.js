function powerSet(string) {
  // Split up the input into individual, sorted letters
  string = string.split('').sort();
  // Declare results object with an empty string key and its value true
  var results = {'': true};
  // iterate through the letters array
  for (var i = 0; i < string.length; i++) {
    // if the letter is not within results
    if (!results[string[i]]) {
      // iterate through results
      for (var key in results) {
        // set the letter as a key and its value to true
        results[key+string[i]] = true;
      }
    }
  }
  // Sort the object, in order, into an Array
  var sortedObject = Object.keys(results).sort();
  return sortedObject;
}