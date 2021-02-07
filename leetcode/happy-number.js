// Link to problem -> https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let map = new Map();
	while (n !== 1) {
		let tempSum = 0,
			tempN = n;
		while (tempN !== 0) {
			tempSum += (tempN % 10) ** 2;
			tempN = Math.floor(tempN / 10);
		}
		if (map.has(tempSum)) return false;
		map.set(tempSum, true);
		n = tempSum;
	}
	return true;
};
