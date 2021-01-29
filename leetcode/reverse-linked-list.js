// Link to challenge -> https://leetcode.com/problems/reverse-linked-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let current = head,
		next = null,
		prev = null;
	while (current != null) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
};

// recursive method
var reverseList = function (head) {
	let keepHead = null,
		reverse = (list) => {
			if (list == null) return;
			if (list.next == null) {
				keepHead = list;
				return;
			}
			reverse(list.next);
			list.next.next = list;
			list.next = null;
		};
	reverse(head);
	return keepHead;
};
