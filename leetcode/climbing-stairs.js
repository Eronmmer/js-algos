// Link to challenge -> https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	const memo = new Map();
	const climb = (x, y, memo) => {
		if (x > y) return 0;
		if (x === y) return 1;
		if (memo.get(x) > 0) return memo.get(x);
		memo.set(x, climb(x + 1, n, memo) + climb(x + 2, n, memo));
		return memo.get(x);
	};
	return climb(0, n, memo);
};
