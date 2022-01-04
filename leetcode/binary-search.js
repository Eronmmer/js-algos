// Link to problem -> https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let l = 0,
		r = nums.length - 1;
	while (l <= r) {
		let pivot = Math.floor(l + (r - l) / 2);
		if (nums[pivot] === target) return pivot;
		if (nums[pivot] > target) r = pivot - 1;
		else l = pivot + 1;
	}
	return -1;
};
