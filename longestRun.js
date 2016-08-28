function longestRun (string) {
  // Write your code here, and
  // return your final answer.
  var longestRun, currentRun = 1; // there's always one instance
  var indexTracker = [];
  var startIndex;
  var end = 0;

  // for loop starting at index 1
  for (var i = 1; i < string.length; i++) {
    // if current letter is equal to previous letter
    if (string[i] === string[i-1]) {
      // increment currentRun value
      currentRun++;
    } else { // if not,
      // if currentRun is greater than longestRun
      if (currentRun > longestRun) {
        // set longestRun equal to currentRun
        longestRun = currentRun;
        // set end of run to the previous letter
        end = i - 1;
      } else { // if not,
        // set currentRun to 1
        currentRun = 1;
      }
    }
  }

  startIndex = (end - longestRun) + 1;
  indexTracker[0] = startIndex;
  indexTracker[1] = end;

  return indexTracker;
}