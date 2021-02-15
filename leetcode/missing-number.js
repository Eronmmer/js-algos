// Link to problem -> https://leetcode.com/problems/missing-number/

// Naive approach -> The idea is to first sort the given array then while looping through the sorted array, return an index if it doesn't correspond to the number at that index.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i) return i;
	}
	return nums.length;
};

// A more optimized approach -> Using gauss formula. Read about it in the last approach here: https://leetcode.com/problems/missing-number/solution/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let actualSum = (nums.length * (nums.length + 1)) / 2;
	let currSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currSum += nums[i];
	}
	return actualSum - currSum;
};
