// Link to problem -> https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// First find the index of the smallest element in the array.
	let left = 0,
		right = nums.length - 1;
	while (left < right) {
		let midPoint = left + Math.floor((right - left) / 2);
		if (nums[midPoint] > nums[right]) {
			left = midPoint + 1;
		} else {
			right = midPoint;
		}
	}

	/*
	 * At this point, left == right == indexOfSmallestValue == numberOfRotations.
	 * Now, since our array can be divided into two sorted lists, we just have to find
	 * out what part of the array we need to perform the second binary search on.
	 */
	let rotations = left;
	left = 0;
	right = nums.length - 1;
	if (target >= nums[rotations] && target <= nums[right]) {
		left = rotations;
	} else {
		right = rotations - 1;
	}

	while (left <= right) {
		let midPoint = left + Math.floor((right - left) / 2);
		if (target === nums[midPoint]) {
			return midPoint;
		} else if (target > nums[midPoint]) {
			left = midPoint + 1;
		} else {
			right = midPoint - 1;
		}
	}

	return -1;
};
