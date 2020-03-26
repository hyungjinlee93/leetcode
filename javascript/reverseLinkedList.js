/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    let helper = (node, prevnode = null) => {
        if (node.next) {
            let nextnode = node.next;
            node.next = prevnode;
            return helper(nextnode, node);
        }
        node.next = prevnode;
        console.log(node);
        return node;
    }
    head = helper(head);
    return head;
};
