/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeElements(head, val) {
    //删除头部节点
    while (head !== null && head.val === val) {
        head = head.next;
    }
    if (head === null) return head;
    let pre = head,
        cur = head.next;
    //删除非头部节点
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
        } else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    return head;
};

//虚拟头节点
// var removeElements = function (head, val) {
//     const ret = new ListNode(0, head);
//     let cur = ret;
//     while (cur.next) {
//         if (cur.next.val === val) {
//             cur.next = cur.next.next;
//             continue;
//         }
//         cur = cur.next;
//     }
//     return ret.next;
// };