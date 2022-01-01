// link to challenge => https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
	let differences = {};
	for (let i = 0; i < nums.length; i++) {
		let currValue = nums[i],
			differenceIdx = differences[currValue];
		if (differenceIdx !== undefined) {
			return [differenceIdx, i];
		} else {
			differences[target - currValue] = i;
		}
	}
};
