/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
   if(head===null){
    return null;
   }
   if(left===right){
    return head;
   }
   let t = head;
   let before = null;
   let pos = 1;
   while(t!=null){
    if(pos<left){
        before = t;
        t = t.next;
        pos++;
        continue;
    }
    let curr = t;
    let prev = null;
    let times = right-left+1;
    while(times--){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    t.next = curr;
    if(before){
    before.next = prev;
    return head;
    }
    return prev
   }
    return head
};