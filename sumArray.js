function sumArray(array) {
    var currentSum = 0;
    var greatestSum = array[0];
    // Iterate through array
    for (i = 0; i < array.length; i++) {
        currentSum += array[i];
        // Compare currentSum w/ greatestSum & return greater #
        greatestSum = Math.max(currentSum, greatestSum);
        if (currentSum <0){
        	currentSum = 0
        }
    }
    // Return greatestSum
    return greatestSum;
}
