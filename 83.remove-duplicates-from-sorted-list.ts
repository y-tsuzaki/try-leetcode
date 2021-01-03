/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) {
        return null;
    }
    let cursorA: ListNode = null;
    let cursorB: ListNode = null;
    cursorA = head;
    cursorB = head;
    while(cursorA != null) {        
        if (cursorA.next != null && cursorA.val === cursorA.next.val ) {
            cursorA = cursorA.next;  
            continue;
        }   
        cursorA = cursorA.next;  
        cursorB.next = cursorA;
        cursorB= cursorA;
    }
    return head;
};
// @lc code=end
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}