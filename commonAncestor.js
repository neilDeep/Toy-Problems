var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1,child2){
  var closest = null;
  //if the children are the same, their common ancestor is themselves
  if (child1 === child2) {return child1;}
  //check if both children are part of this tree
  if (this.isDescendant(child1) && this.isDescendant(child2)) {
    //set this tree as the closest common ancestor
    closest = this;
    //go through each of the children of this tree
    for (var i = 0; i < this.children.length; i++) {
      //update closest if both children are part of this child tree
      closest = this.children[i].getClosestCommonAncestor(child1,child2) || closest;
    }
  }
  return closest;
};

Tree.prototype.getAncestorPath = function(child){
  var path = [];
  //check if the child is part of this tree
  if (this.isDescendant(child) || this === child) {
    path.push(this);
    //check if each of the children of this tree are ancestors of child
    for (var i = 0; i < this.children.length; i++) {
      path = path.concat(this.children[i].getAncestorPath(child));
    }
  }
  //return the path array or null if it is empty
  return path.length > 0 ? path : null;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};