function zipSum (xs, ys) {

  var result = [];

  for(var i=0; i< (Math.min(xs.length, ys.length)); i++) {
    result.push(xs[i]+ys[i]);
  }

  return result;
}
