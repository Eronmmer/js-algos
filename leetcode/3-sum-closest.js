// Link to challenge -> https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	let diff = Number.MAX_SAFE_INTEGER;
	nums.sort();
	for (let i = 0; i < nums.length && diff !== 0; i++) {
		let low = i + 1,
			high = nums.length - 1;
		while (low < high) {
			const sum = nums[i] + nums[low] + nums[high];
			if (Math.abs(target - sum) < Math.abs(diff)) diff = target - sum;
			if (sum < target) low++;
			else high--;
		}
	}
	return target - diff;
};
