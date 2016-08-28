var firstNonRepeatedCharacter = function(string) {
  // Create Storage
  var storage = {};
  
  // Iterate through Input String
  for (var i=0; i<string.length; i++){
    //If Letter exists as Key within Storage
    if (storage[string.charAt(i)]) {
      //Update Letter Count
      storage[string.charAt(i)]++;
    } else { // If Letter Doesnt' exist
      // Create Said Key and Update Count to 1
      storage[string.charAt(i)] = 1;
    }
  }
  
  // Iterate through Input String
  for (var i=0; i<string.length; i++) {
    // If there is Already an Instance of The Letter
    if (storage[string.charAt(i)] === 1) {
      // Return that Letter
      return string.charAt(i);
    }
  }
  // If Input String contains all repeating letters
  return "sorry";
};