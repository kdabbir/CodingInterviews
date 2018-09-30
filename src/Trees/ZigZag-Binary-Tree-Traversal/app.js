//BST initially is null and later has left and right child nodes to it.

function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}


// Insert a new node in BST.

// Pseudocode: 

// - Check if not valid value & return null.
// - Else check if inserted value is less than or equal to the node's current value.
// - If yes, check left node is empty, then create new node with this value
// - Else, run recursive loop for left node with the same value
// - If no,check right node is empty, then create new node with this value
// - Else, run recursive loop for right node with the same value

BST.prototype.InsertNode = function(value){
  var newNode = new BST(value);
  if(!value && value!=0){
      return null;
  } else if (value <= this.value){
      if(!this.left){
          this.left = newNode;
      } else {
          this.left.InsertNode(value);
      }
      return value;
  } else {
      if(!this.right){
          this.right = newNode;
      } else {
          this.right.InsertNode(value);
      }
      return value;
  }
}

var bstObj = new BST(50);

bstObj.InsertNode(30);
bstObj.InsertNode(20);
bstObj.InsertNode(45);
bstObj.InsertNode(10);
bstObj.InsertNode(35);
bstObj.InsertNode(70);
bstObj.InsertNode(60);
bstObj.InsertNode(100);
bstObj.InsertNode(59);
bstObj.InsertNode(85);
bstObj.InsertNode(105);
//console.log(bstObj);


/**
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrderTraversal = (root) => {
    var resArr = [];
    helperFn(root,0,resArr);
    return resArr;
};

var helperFn = (node,level,resArr) =>{
    if(!node) return resArr;
    if(!resArr[level]) resArr[level] = [];
    level % 2 > 0 ? resArr[level].unshift(node.value)  : resArr[level].push(node.value);
    if(node.left) helperFn(node.left, level+1, resArr);
    if(node.right) helperFn(node.right, level+1, resArr);
};

let result = zigzagLevelOrderTraversal(bstObj);
console.log(result);

