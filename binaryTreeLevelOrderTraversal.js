/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let queue = [];
    let traversal = [];
    queue.push(root);
    let helper = (node, level = 1) => {
        if (node !== null) {
            let obj = {};
            if(queue[level] === undefined) {
                queue[level] = [];
            }
            queue[level].push(node.left, node.right);
            helper(node.left, level + 1);
            helper(node.right, level + 1);
        }
    }
    helper(root);
    traversal[0] = [root.val];
    for (let i = 1; i < queue.length; i++) {
        for (let j = 0; j < queue[i].length; j++) {
            if (queue[i][j] !== null) {
                if (traversal[i] === undefined) {
                    traversal[i] = [];
                }
                traversal[i].push(queue[i][j].val);
            }
        }
    }
    return traversal;
};
