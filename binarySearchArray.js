function binarySearch(array, target, left, right) {
  // Write your code here, and
  // return your final answer.

  //left & right as the two ends of the array
  left = left || 0;
  right = right || array.length - 1;

  //calculate the middle by taking the average of the two
  var mid = Math.floor((left + right) / 2);

  //if the target is in the middle, we are done
  if (target === array[mid]) {
    return mid;
  }

  //update left and right and call the function recursively
  if (right - left > 0) {
    if (target < array[mid]) {
      return binarySearch(array, target, left, mid - 1);
    } else {
      return binarySearch(array, target, mid + 1, right);
    }
  }

  //no solution
  return -1;
}