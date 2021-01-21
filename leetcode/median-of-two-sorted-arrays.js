// Link to challenge: https://leetcode.com/problems/median-of-two-sorted-arrays/

// SOLUTION 1. O((n+m)Log(n+m))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const sortedArr = nums1.concat(nums2).sort((a, b) => (a < b ? -1 : 1));
	const midIdx = Math.floor(sortedArr.length / 2);
	return sortedArr.length % 2 === 0
		? (sortedArr[midIdx] + sortedArr[midIdx - 1]) / 2
		: sortedArr[midIdx];
};

// SOLUTION 2. O(log n + m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const merger = (arr1, arr2) => {
		let i = 0,
			j = 0,
			final = [];
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				final.push(arr1[i++]);
			} else {
				final.push(arr2[j++]);
			}
		}
		while (i < arr1.length) {
			final.push(arr1[i++]);
		}
		while (j < arr2.length) {
			final.push(arr1[j++]);
		}
		return final;
	};

	const sortedArr = merger(nums1, nums2);
	const midIdx = Math.floor(sortedArr.length / 2);
	return sortedArr.length % 2 === 0
		? (sortedArr[midIdx] + sortedArr[midIdx - 1]) / 2
		: sortedArr[midIdx];
};
