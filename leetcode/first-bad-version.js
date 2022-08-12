// Link to challenge: https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let low = 1,
			high = n;

		while (low <= high) {
			let currentMid = Math.floor(low + (high - low) / 2);
			if (!isBadVersion(currentMid)) {
				low = currentMid + 1;
			} else {
				if (!isBadVersion(currentMid - 1)) {
					return currentMid;
				}
				high = currentMid - 1;
			}
		}
	};
};
