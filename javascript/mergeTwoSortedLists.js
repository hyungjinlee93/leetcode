/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null && l2 !== null) {
        return l2;
    } else if (l2 === null && l1 !== null) {
        return l1;
    }
    let head = null, l3 = null;
    while (l1 !== null && l2 !== null) {
        if (head === null) {
            if (l1.val <= l2.val) {
                l3 = l1;
                l1 = l1.next;
            } else {
                l3 = l2;
                l2 = l2.next;
            }
            head = l3;
        } else {
            if (l1.val <= l2.val) {
                l3.next = l1;
                l1 = l1.next;
            } else {
                l3.next = l2;
                l2 = l2.next;
            }
            l3 = l3.next;
        }
    }
    if (l1 === null && l2 !== null) {
        l3.next = l2;
    }
    if (l2 === null && l1 !== null) {
        l3.next = l1;
    }
    if (l1 === null && l2 === null) {
        l3.next = null;
    }
    return head;
};
