// Link to challenge -> https://leetcode.com/problems/majority-element/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let obj = {};
	for (let elem of nums) {
		obj[elem] = ++obj[elem] || 1;
	}
	const max = Math.max(...Object.values(obj));
	return Object.keys(obj).find((e) => obj[e] === max);
};

// Solution with constant space
// WILL ADD THIS LATER.........
