nthFibonacci = function(n) {
  // n input is # of months
  // result is the Fibonacci # after n months
  var result = 0;

  if (n === 0) {
    return result;
  }

  else if (n === 1) {
    result = 1;
    return result;
  }

  else {
    var x = 0, y = 1; // fromExample
    for(var i = 2; i <= n; i++) {
      result = x + y;
      x = y;
      y = result;
    }
  }

  return result;
};