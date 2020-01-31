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
var swapPairs = function(head, connector = null) {
    if(!head) {
        return head;
    }
    if(!head.next) {
        return head;
    }
    let temp = head.next.next;
    let newhead = head.next;
    head.next.next = head;
    head.next = temp;
    if (connector) {
        connector.next = newhead;
    }
    if (temp) {
        swapPairs(temp, newhead.next);
    }
    return newhead;
};
