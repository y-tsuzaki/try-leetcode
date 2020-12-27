/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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


//　反省:普通にintegerにして足し算してからLinkedListにすればよかった
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let next1 = l1;
    let next2 = l2;
    let carry:number = 0;
    let result:ListNode = null;
    let currentNode:ListNode = null;
    
    while(next1 !== null) {
        let curDigitVal:number = null;
        let added = next1.val + carry;
        if (next2 !== null) {
            added += next2.val;
        }
        carry = Math.floor(added / 10);
        console.log([next1.val, next2?.val , added,carry])
        
        curDigitVal = added % 10;

        const node = new ListNode(curDigitVal, null)
        if (result === null) {
            result = node;
            currentNode = result;
        } else {        
            currentNode.next = node;
            currentNode = node;
        }

        next1 = next1.next
        if (next2 !== null) {
            next2 = next2.next;
        }
        if (next1 === null) {
            next1 = next2;
            next2 = null;
        }
    }
    if (carry > 0 ) {
        currentNode.next = new ListNode(carry, null);
    }
    return result;
};

// @lc code=end

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    toString(): string {
        let cur :ListNode = this;
        let str = '';
        do {
            str += cur.val;
            cur = cur.next;
        } while (cur !== null)
        return str;
    }
}

function arrayToLinkedList(arr: number[]) {
    let result = null;
    let current = null;
    for (let num of arr ) {
        const node = new ListNode(
            num, null
        ) ;
        if (result == null) {
            result = node;
        } else {
            current.next = node;
        }
        current = node;
    }

    return result;
} 

console.log(
    addTwoNumbers(
        arrayToLinkedList([2,4,9]),
        arrayToLinkedList([5,6,4,9])
    ).toString()
);

test('test', () => {
    expect('70401').toBe(
        addTwoNumbers(
            arrayToLinkedList([2,4,9]),
            arrayToLinkedList([5,6,4,9])
        ).toString()
    );
});
