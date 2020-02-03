/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, currentdepth = 1) {
    if (root === null) {
        return currentdepth - 1;
    }
    let left = maxDepth(root.left, currentdepth + 1);
    let right = maxDepth(root.right, currentdepth + 1);
    return left > right ? left : right;
};
