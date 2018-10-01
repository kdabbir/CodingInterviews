
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Questions: 
  - BST is balanced and values are integers.
*/

/*
Pseudocode: 
- Run a depth first search and go through left and right nodes of each level
- Swap left and right nodes.
*/




var mirrorTree = (tree) => {
  if(!tree || !tree.val) return null;
  
  let nodesArr = [tree];
  if(nodesArr.length){
    currNode = nodesArr.shift();
    if(currNode){
      swapLeftRight(currNode);
      if(currNode.left) nodesArr.push(currNode.left);
      if(currNode.right) nodesArr.push(currNode.right);
    }
  }
  return tree;  
};

let swapLeftRight = (currNode) => {
  if(currNode.left && currNode.right){
    let temp = currNode.left;
    currNode.left = currNode.right;
    currNode.right = temp;
  }
   else if(currNode.left){
    currNode.right = currNode.left ;
    currNode.left = null;
  } else {
    currNode.left = currNode.right;
    currNode.right = null ;
  }
  return currNode;
};


const tree = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}};
let dupTree= Object.assign({},tree);
console.log(dupTree);
console.log(mirrorTree(tree));

//     3 --> 1
//    / \
//   9  20 --> 2
//     /  \
//    15   7 --> 3

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/