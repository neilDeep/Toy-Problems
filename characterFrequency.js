var characterFrequency = function(string) {
  var result = [];
  var charCounts = {}; // {'letter': #}

  for (var i=0; i<string.length; i++) {
        if (!charCounts[string[i]]) { // If the letter is not within charCount
            charCounts[string[i]] = 1;
        }
        else if (charCounts[string[i]]) { // If the letter IS within charCount
            charCounts[string[i]]++; // increments the value of the letter key 
        }
  }
  
  var keys = Object.keys(charCounts);
  
  keys.sort(function(a,b){
    if (charCounts[b] === charCounts[a]) {
        if (a > b) {
            return 1;
        } else if(a < b) {
            return -1;
        }
    }
    return charCounts[b]-charCounts[a];
  });

  for (var j =0; j < keys.length; j++){
    var charPair = [];
    charPair[0] = keys[j];
    charPair[1] = charCounts[keys[j]];
    result.push(charPair);
  }
  return result;
}