function allAnagrams(string) {
  var results = [];

  //recursive function adds letters to an anagram from avaialableLetters
  var recurse = function(anagram, availableLetters) {
    //Base Case
    //check if anagram is complete by comparing its length w/ inputString
    if (anagram.length === string.length) {
      results.push(anagram);
    }
    //Edge Case
    else { //There is still some space to input availableLetters
      for (var i = 0; i < availableLetters.length; i++) {
        //call the recursive function on a new anagram string with a letter
        //added and a new availableLetters string with that same letter removed
        recurse(anagram + availableLetters[i], availableLetters.slice(0,i)
          .concat(availableLetters.slice(i+1)));
      }
    }
  };

  //call the recursive function to start it. (actual callsite)
  recurse('', string);

  //return results array of allAnagrams
  return results;
}
