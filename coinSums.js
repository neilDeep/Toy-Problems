function coinSums (total) {
  var coins = [1,2,5,10,20,50,100,200];
  var count = 0;

  //recursive function which checks all possible sums
  var checkSum = function(sum, index) {
    if (sum === total) {
      //increment the count if the sum reaches the total
      count++;
    } else if (sum < total) {
      //if the sum is less than the total
      for (var i = index; i < coins.length; i++) {
      //call the function recursively for all possible combinations
        checkSum(sum+coins[i], i);
      }
    } 
  };
 //start sum and index at 0 to begin loop
  checkSum(0,0);
  return count;
}