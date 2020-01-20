/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let lowest = null;
  let helper = (node, p, q) => {
      if (contains(node, p) && contains(node, q)) {
         lowest = node;
          if(node.left) {
              helper(node.left, p, q);
          }
          if(node.right) {
              helper(node.right, p, q);
          }
      }
  }
  let contains = (node, a) => {
      if (node.val === a.val) {
          return true;
      } 
      if (node.left && contains(node.left, a)) {
          return true;
      }
      if (node.right && contains(node.right, a)) {
          return true;
      }
      return false;
  }
  helper(root, p , q);
  return lowest;
};