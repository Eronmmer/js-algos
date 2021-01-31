// Link to challenge -> https://leetcode.com/problems/linked-list-cycle

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
var hasCycle = function (head) {
	let hash = new Map(),
		current = head;
	while (current) {
		if (hash.has(current.next)) return true;
		hash.set(current.next, true);
		current = current.next;
	}
	return false;
};
