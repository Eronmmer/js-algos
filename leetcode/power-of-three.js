// -> Link to problem: https://leetcode.com/problems/power-of-three

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n < 1) return false;
	return (Math.log10(n) / Math.log10(3)) % 1 === 0;
};
