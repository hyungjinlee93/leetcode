/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    } else if (root.left === null && root.right === null) {
        return true;
    } else if (root.left === null || root.right === null) {
        return false;
    }
    let left = [];
    let right = [];
    let lefthelper = (node) => {
        if (node === null) {
            left.push(null);
        } else if (node.left === null && node.right === null) {
            left.push(node.val);
        } else {
            left.push(node.val);
            lefthelper(node.left);
            lefthelper(node.right);
        }
    }
    let righthelper = (node) => {
        if (node === null) {
            right.push(null);
        } else if (node.left === null && node.right === null) {
            right.push(node.val);
        } else {
            right.push(node.val);
            righthelper(node.right);
            righthelper(node.left);
        }
    }
    lefthelper(root.left);
    righthelper(root.right);
    if (left.length !== right.length) {
        return false;
    } else {
        for (let i = 0; i < left.length; i++) {
            if (left[i] !== right[i]) {
                return false;
            }
        }
        return true;
    }
};
