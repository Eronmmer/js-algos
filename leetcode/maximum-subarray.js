// Link to challenge -> https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	const maxSum = nums[0];
	const currentSum = maxSum;
	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i] + currentSum, nums[i]);
		maxSum = Math.max(currentSum, maxSum);
	}
	return maxSum;
};
