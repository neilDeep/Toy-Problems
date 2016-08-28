var Range = function(start, end, step) {
  this.start = start;
  this.end = end !== undefined ? end : start;
  this.step = step || (start < end ? 1 : -1);
};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  for (var i = this.start; this.start < this.end ? i <= this.end : i >= this.end; i += this.step) {
    callback(i);
  }
};

Range.prototype.includes = function (val) {
  for (var i = this.start; this.start < this.end ? i <= this.end : i >= this.end; i += this.step) {
    if (i === val) {
      return true;
    }
  }
  return false;
};