// Link to challenge -> https://leetcode.com/problems/valid-parentheses/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length === 0) return false;
	const map = { "(": ")", "{": "}", "[": "]" };
	const stack = [];
	for (let char of s) {
		if (map[char]) {
			stack.push(char);
		} else {
			let last = stack.pop();
			if (map[last] !== char) return false;
		}
	}
	return stack.length === 0;
};

"([{} { [()] (()v()) } ])"