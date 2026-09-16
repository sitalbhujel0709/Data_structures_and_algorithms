/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null
    let prev = null;
    while (mid !== null) {
        let next = mid.next;
        mid.next = prev
        prev = mid
        mid = next
    }
    let left = head;
    let right = prev;
    while(right!==null){
        let leftNext = left.next;
        let rightNext = right.next;

        left.next = right;
        right.next = leftNext;

        left = leftNext;
        right = rightNext;

   }
};