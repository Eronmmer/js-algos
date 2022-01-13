// Link to problem -> https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let left = 0,
		right = x;
	while (left <= right) {
		let mid = left + Math.floor((right - left) / 2),
			square = mid * mid,
			nextSquare = (mid + 1) * (mid + 1);
		if (square === x || (square < x && nextSquare > x)) {
			return mid;
		} else if (square < x) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return x;
};
