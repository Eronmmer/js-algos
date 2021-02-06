// Link to challenge -> https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length <= 1) return nums.length;
	let i = 0,
		j = 0;
	while (j < nums.length) {
		if (nums[i] !== nums[j]) {
			nums[i + 1] = nums[j];
			i++;
		}
		j++;
	}
	return i + 1;
};
