var Stack = {
  storage: {},
  count: 0,
  maxValues: [],
  push: function(value) {
    if (this.maxValues.length === 0) {
      this.maxValues.push(value);
      console.log(this.maxValues);
    } else {
      for(var i=0; i<this.maxValues.length; i++) {
        if (value > this.maxValues[i]) {
          this.maxValues[i] = value;
          console.log(this.maxValues);
        }
      }
    }
    this.storage[this.count] = value;
    this.count++;
    console.log(this.storage);
  },
  pop: function() {
    var removed = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
    console.log(this.storage);
    return removed;
  },
  getMaxValue: function() {
   for (var j=0;j<this.maxValues.length;j++) {
     return this.maxValues[j];
   }
  }
};