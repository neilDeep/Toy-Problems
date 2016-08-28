// LinkedList Builder

var LinkedList = function (initialValue) {
    if(!initialValue) {
      this.head = this.tail = null;
    } else {
      this.head = new this.makeNode(initialValue);
      this.tail = this.head;
    }
};

// Node Builder

LinkedList.prototype.makeNode = function(value) {
  this.value = value;
  this.next = null;
};

// LinkedList Methods

LinkedList.prototype.addToTail = function (value) {
  //Fill a new Node with value
  var filledNode = new this.makeNode(value);
  //Check to see if there is a head
  if (!this.head){ // if not,
    // set the head equal to the new Node
    this.head = filledNode;
    // set the tail equal to the head
    this.tail = filledNode;
  } else { // if an head & tail are present
    // set the tail's next value to point to the new Node
    this.tail.next = filledNode;
    // reset the list's tail to be the new node
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function() {
  // Store the currentHead to be removed into a new variable
  var removedNode = this.head;
  if(!this.head.next) {
    this.head = null;
    this.tail = null;
  } else {
    // Point Head to next Node, which effectively removes currentHead
    this.head = this.head.next;
  }
  // Return the removed value
  return removedNode;
};

LinkedList.prototype.contains = function(target) {
  // Define Recursive Function that will Check Each Node in LinkedList
  var containsTarget = function(node){
    // Compare the inputNode's value with target value
    if (node.value === target){ // does contain
      return true;
    }
    if (node.next === null) { // doesn't contain & is last node in list
      return false;
    } else {
      // Switch to next node & check again
      return containsTarget(node.next);
    }
  };
  // Start by checking list.head
  return containsTarget(this.head);
};