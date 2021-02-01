// Link to challenge -> https://leetcode.com/problems/intersection-of-two-linked-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let map = new Map(),
		currA = headA,
		currB = headB;
	while (currA) {
		map.set(currA, 1);
		currA = currA.next;
	}
	while (currB) {
		if (map.has(currB)) return currB;
		currB = currB.next;
	}
	return null;
};

// Solution with constant space
var getIntersectionNode = function (headA, headB) {
	let currA = headA,
		currB = headB,
		lastA,
		lastB;
	while (currA && currB) {
		if (lastA !== undefined && lastB !== undefined && lastA !== lastB)
			return null;
		if (currA === currB) return currA;
		if (currA.next == null) {
			lastA = currA.val;
			currA = headB;
		} else {
			currA = currA.next;
		}
		if (currB.next == null) {
			lastB = currB.val;
			currB = headA;
		} else {
			currB = currB.next;
		}
	}
	return null;
};
