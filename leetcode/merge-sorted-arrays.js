// Link to challenge -> https://leetcode.com/problems/merge-sorted-array/submissions/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let i = 0,
		j = 0,
		addCount = 0;
	while (i - addCount < m) {
		if (nums1[i] > nums2[j]) {
			nums1.splice(i, 0, nums2[j]);
			addCount++;
			j++;
		}
		i++;
	}
	nums1.splice(i);
	while (j < n) {
		nums1.push(nums2[j]);
		j++;
	}
};
