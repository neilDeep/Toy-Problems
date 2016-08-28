function combineSortLinkedLists(list1, list2) {
  // Extract Values in list1
  var list1Values = [];
  var currentNode1 = list1.head;
  while(currentNode1) {
    list1Values.push(currentNode1.value);
    currentNode1 = currentNode1.next;
  }

  // Extract Values in list2
  var list2Values = [];
  var currentNode2 = list2.head;
  while(currentNode2) {
    list2Values.push(currentNode2.value);
    currentNode2 = currentNode2.next;
  }

  // Combine Extracted Values
  var combinedArray = list1Values.concat(list2Values);

  // Sort combinedArray
  combinedArray.sort(function(a, b){
    return a-b;
  });

  // Create a New List & add sorted values
  var list3 = new LinkedList();
  for(var i=0; i<combinedArray.length; i++) {
    list3.addToTail(combinedArray[i]);
  }

  // Return Sorted LinkedList
  return list3;
}

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var list2 = new LinkedList();
list2.addToTail(2);
list2.addToTail(4);
list2.addToTail(4);
list2.addToTail(8);

var list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(8);
list1.addToTail(20);

combineSortLinkedLists(list1, list2);