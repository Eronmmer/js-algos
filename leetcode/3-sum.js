/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort();
	const res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			let low = i + 1,
				high = nums.length - 1,
				sum = 0 - nums[i];
			while (low < high) {
				if (nums[low] + nums[high] === sum) {
					let arr = [nums[i], nums[low], nums[high]];
					res.push(arr);
					while (low < high && nums[low] == nums[low + 1]) low++;
					while (low < high && nums[high] == nums[high - 1]) high--;
					low++;
					high--;
				} else if (nums[low] + nums[high] > sum) {
					high--;
				} else {
					low++;
				}
			}
		}
	}
	return res;
};
