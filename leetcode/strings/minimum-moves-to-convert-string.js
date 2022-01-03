// Link to challenge -> https://leetcode.com/problems/minimum-moves-to-convert-string/

/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
	let i = 0,
		count = 0;
	while (i < s.length) {
		if (s[i] === "0") {
			i++;
		} else {
			i = +3;
			count++;
		}
	}
	return count;
};
