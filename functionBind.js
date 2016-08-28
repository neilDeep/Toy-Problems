var bind = function(func, thisValue) {
  if (typeof func !== "function") {
    console.log("bind - what is trying to be bound is not a function");
  }

  // get the arguments of bind into an array
  // 0th argument is the function, 1st is the context
  var bindArguments = Array.prototype.slice.call(arguments, 2);

  return function() {
    // get the arguments of the bound function into an array
    var funcArgs = Array.prototype.slice.call(arguments);
    // call the function pre-filling values bind time
    return func.apply(thisValue, bindArguments.concat(funcArgs));
  }
};

Function.prototype.bind = function (context) {
    var fn = this;
    return function () {
        return fn.apply(context);
    };
}

// Fails 6 Test