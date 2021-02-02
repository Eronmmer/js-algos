// Link to challenge -> https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	for (let i = nums.length; i > 0; i--) {
		let noSwap = true;
		for (let j = 0; j < i - 1; j++) {
			if (nums[j] === 0) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return nums;
};

// Optimized code later here
