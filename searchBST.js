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
var searchBST = function(root, val) {
    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    let queue = [];
    let helper = (node) => {
        if (node !== null) {
            queue.push(node.left, node.right);
            helper(node.left);
            helper(node.right);
        }
    }
    helper(root);
    for(let i = 0; i < queue.length; i++) {
        if(queue[i] !== null && queue[i].val === val) {
            return queue[i];
        }
    }
    return null;
};
