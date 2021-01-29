// Link to challenge -> https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	let current = head,
		arr = [];
	while (current) {
		arr.push(current.val);
		current = current.next;
	}
	let i = 0,
		j = arr.length - 1;
	while (i < j) {
		if (arr[i] !== arr[j]) return false;
		i++;
		j--;
	}
	return true;
};

// More efficient solution
var isPalindrome = function (head) {
	let slow = head,
		fast = head;
	let reverse = (head) => {
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
	while (fast != null && fast.next != null) {
		fast = fast.next.next;
		slow = slow.next;
	}
	slow = reverse(slow);
	fast = head;
	while (slow != null) {
		if (slow.val !== fast.val) return false;
		slow = slow.next;
		fast = fast.next;
	}
	return true;
};
