/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let helper = (pnode, qnode) => {
        if (pnode === null && qnode === null) {
            return true;
        }
        if ((pnode === null && qnode !== null) || (pnode !== null && qnode === null)) {
            return false;
        }
        if (pnode.val !== qnode.val) {
            return false;
        }
        return helper(pnode.left, qnode.left) && helper(pnode.right, qnode.right);
    }
    return helper(p, q);
};
