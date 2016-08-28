function spiralTraversal(matrix) {
  var result = [];
  var startRow = 0;
  var endRow = matrix.length-1;
  var startColumn = 0;
  var endColumn = matrix[0].length-1;

  while ( startRow <= endRow && startColumn <= endColumn ) {

    for (var i = startColumn; i <= endColumn; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;

    for (var j = startRow; j <= endRow; j++) {
      result.push(matrix[j][endColumn]);
    }
    endColumn--;

    if (startRow <= endRow) {
      for (var k = endColumn; k >= startColumn; k--) {
        result.push(matrix[endRow][k]);
      }
      endRow--;
    }

    if (startColumn <= endColumn) {
      for (var l = endRow; l >= startRow; l--) {
        result.push(matrix[l][startColumn]);
      }
      startColumn++;
    }
  }

  return result;
}
