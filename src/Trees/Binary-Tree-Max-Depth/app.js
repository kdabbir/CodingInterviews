
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
- Check if current tree left is empty, then return 0. 
- Else,Iterate through the tree's right and left nodes, till we find both left and right node as null for a particular node.
*/

// let a; // no value
// undefined is a type.
// null is the value.(object)


var maxDepth = function(root) {
  if(!root) return 0;
  var left = root.left;
  var right = root.right;
  var x =  Math.max(maxDepth(left), maxDepth(right)) +1;return x; 
};

const tree = {"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}};
console.log(maxDepth(tree));

//     3 --> 1
//    / \
//   9  20 --> 2
//     /  \
//    15   7 --> 3

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/