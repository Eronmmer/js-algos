// Link to challenge -> https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	// Using bubble sort -|
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

// Optimized code
var moveZeroes = function (nums) {
	let zeroCount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) zeroCount++;
	}
	let numsKeep = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) numsKeep.push(nums[i]);
	}
	while (zeroCount--) {
		numsKeep.push(0);
	}
	for (let i = 0; i < nums.length; i++) {
		nums[i] = numsKeep[i];
	}
};

// another optimized solution with constant space and linear time
var moveZeroes = function (nums) {
	let lastNonZeroFoundAt = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) nums[lastNonZeroFoundAt++] = nums[i];
	}
	for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
		nums[i] = 0;
	}
};

// yet another solution. This one seems to be more optimized for certain edge cases
var moveZeroes = function (nums) {
	/*
	 * Idea -> keep two pointers.
	 */
	let anchor = 0;
	let swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			swap(nums, anchor, i);
			anchor++;
		}
	}
};
