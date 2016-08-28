function insertionSort(array) {
  
  for(var i = 0; i < array.length; i++) {
    var copy = array[i]; //copy of Current Element in Array
    // Compare Each Unsorted Element (array[j]) with copy.
    for(var j = i - 1; j >= 0 && (array[j] > copy); j--) { 
      //If Larger, Shift the Current Unsorted Element array[j] 
      array[j+1] = array[j];
    }
    //Insert the copied number at the correct position in Sorted Portion
    array[j+1] = copy;
  }
  // Return Sorted Array 
  return array; 
}