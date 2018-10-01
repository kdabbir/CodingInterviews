
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
- Run a depth first search and go through left nodes of each level and run an iterator function over left nodes.

*/



let leftViewBST = (tree,iteratorFn) => {
  if(!tree || !tree.left) return tree;
  let leftNodesArr = [tree.left];
  while(leftNodesArr.length){
    let currLeftNode = leftNodesArr.shift();
    if(currLeftNode){
      iteratorFn(currLeftNode);
      if(currLeftNode.left) leftNodesArr.push(currLeftNode.left);
    }
  }
};

let iteratorFn = (node) => {
  console.log(node.val);
};

const tree = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}};
let dupTree= Object.assign({},tree);
console.log(dupTree);
console.log(leftViewBST(tree, iteratorFn));

//     3 --> 1
//    / \
//   9  20 --> 2
//     /  \
//    15   7 --> 3

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/