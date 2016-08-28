var hasCycle = function(linkedList){
  var slow = linkedList;
  var fast = linkedList;
  var pause = true;

  while (fast) {
    fast = fast.next;
    if(pause) {
      slow = slow;
    } else {
      slow = slow.next;
    }
    if (fast === slow) {
      return true;
    }
    pause = !pause;
  }

  return false;
};

// HELPER FUNCTIONS //

function Node (val) {
    // TODO
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}