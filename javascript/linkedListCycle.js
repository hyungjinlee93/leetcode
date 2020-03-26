/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
      return false;
  } else if (head.visited) {
      return true;
  } else {
      head.visited = true;
      return hasCycle(head.next);
  }
};