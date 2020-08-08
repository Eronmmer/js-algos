// link to challenge => https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
	let arr =
		nums.findIndex((e) => e < 0) > -1 ? nums : nums.filter((e) => e <= target);
	for (let i = arr.length - 1; i >= 0; i--) {
		let modified = [...arr];
		modified.splice(i, 1);
		let second = modified.find((e) => e + arr[i] === target);
		if (second != undefined) return [nums.indexOf(arr[i]), nums.lastIndexOf(second)];
	}
};
