var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function (event) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (events[event]) {
      events[event].forEach(function (callback) {
        callback.apply(null, args);
      });
    }
  };

  // Register a callback to be fired on this event
  obj.on = function (event, callback) {
    if (!events[event]) {
      events[event] = [callback];
    } else {
      events[event].push(callback);
    }
  };

  return obj;
};