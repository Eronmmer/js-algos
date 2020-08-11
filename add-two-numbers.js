// link to challenge => https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
	let ourList = {}
	function measure(list) {
		let next = list.next, str = "";
		while (next) {
			let val = next.val;
			str = val + str;
			next = next.next;
		}
		return str + list.val;
	}
	let first = measure(l1);
	let second = measure(l2);
	// using BigInt so I could pass one of LeetCode's weird tests case
	let numString = (BigInt(first) + BigInt(second)).toString().split("").reverse().join("");
	
	for (let i = numString.length - 1; i >= 0; i--) {
		let obj = { val: +numString[i], next: ourList.next || null }
		ourList.next = obj;
	}
	return ourList.next;
};
