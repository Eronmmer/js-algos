// link to challenge -> https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	let dummy = new ListNode(0),
		current = dummy;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			current.next = l1;
			l1 = l1.next;
		} else {
			current.next = l2;
			l2 = l2.next;
		}
		current = current.next;
	}

	if (l1) {
		current.next = l1;
	}
	if (l2) {
		current.next = l2;
	}
	return dummy.next;
};
