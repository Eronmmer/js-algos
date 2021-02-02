// Link to challenge -> https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// This is a useless and brute force approach.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	const arr = [],
		hash = {};
	for (let i = 0; i < nums.length; i++) {
		hash[nums[i]] = ++hash[nums[i]] || 1;
	}
	for (let i = 1; i <= nums.length; i++) {
		if (!hash[i]) arr.push(i);
	}
	return arr;
};

// Solution with constant space tomorrow. tired atm
