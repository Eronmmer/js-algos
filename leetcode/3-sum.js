/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	/* 
    First and foremost, sort the array
    Now, you can work with two nested loops. A `for` loop
    and an inner while loop. 
    The idea is to find two other elements that sum up with the current number
    to give 0. So you'd need two pointers.
    While doing this, just make sure you do some checks to meet the edge cases 
    mentioned in the question. For this question, the edge case is that the solution set 
    must not contain duplicate triplets.
    */
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			let low = i + 1,
				high = nums.length - 1,
				sum = 0 - nums[i];
			while (low < high) {
				if (nums[low] + nums[high] === sum) {
					res.push([nums[i], nums[low], nums[high]]);
					while (low < high && nums[low] === nums[low + 1]) low++;
					while (low < high && nums[high] == nums[low - 1]) high--;
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
