/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    let helper = (node) => {
        if (node.left === null && val < node.val) {
            node.left = new TreeNode(val);
        } else if (node.right === null && val > node.val) {
            node.right = new TreeNode(val);
        } else if (val < node.val) {
            helper(node.left);
        } else if (val > node.val) {
            helper(node.right);
        }
    }
    helper(root);
    return root;
};
