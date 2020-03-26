/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.nums = [];
    let helper = (node) => {
        if (node !== null) {
            helper(node.right);
            this.nums.push(node.val);
            helper(node.left);
        }
    }
    helper(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nums.pop();
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nums[this.nums.length - 1] !== undefined;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
