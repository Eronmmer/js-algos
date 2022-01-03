// Link to problem -> https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let low = 0,
		high = nums.length - 1;
	while (low < high) {
		let median = Math.floor((low + high) / 2);
		if (nums[median] === target) {
			return median;
		} else if (nums[median] < target) {
			low = median + 1;
		} else {
			high = median - 1;
		}
	}
	return target > nums[low] ? low + 1 : low;
};
