function longestPalindrome (string) {
  //loop from longest to shortest
  for (var L = string.length; L > 0; L--) {
    //loop through possible start index
    for (var i = 0; i <= string.length - L; i++) {
      //get substring
      var sub = string.substr(i,L);
      //check if palindrome
      if (sub === sub.split('').reverse().join('')) 
      {
        return sub;
      }
    }
  }
}