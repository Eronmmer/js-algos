// Link to challenge -> https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		map[nums[i]] = ++map[nums[i]] || 1;
	}
	return Object.keys(map).find((e) => map[e] === 1);
};

// More efficient solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let initial = 0;
	for (let number of nums) {
		initial = initial ^ number;
	}
	return initial;
};
// Because a XOR a = 0 and  0 XOR b = b
