function isBalanced (string) {
  // Write your code here, and
  // return your final answer.
  var pairs = {')':'('};
  var check = '';

  for (var i = 0; i < string.length; i++) {
    if (['('].indexOf(string[i]) > -1) {
      //add all opening parenthesis to check string
      check += string[i];
    } else if (pairs[string[i]]) {
      //check if each closing parenthesis is matched by the last opening parenthesis
      if (check[check.length-1] === pairs[string[i]]) {
        //remove match from check string
        check = check.slice(0,check.length-1);
      } else {
        //if there is a mismatch the parenthesis aren't balanced
        return false;
      }
    }
  }

  //if all are matched, the string should be empty
  return check === '';
}