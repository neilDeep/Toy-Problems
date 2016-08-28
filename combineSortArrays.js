// Given two sorted arrays, combine them into one sorted array.

function combineSortArrays(array1, array2) {
  var result = array1.concat(array2);
  result.sort();
  return result;
}