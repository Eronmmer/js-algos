// Link to challenge -> https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	let memo = {};
	let climb = (x, memo) => {
		if (x < 0) return -1;
		if (x <= 1) return 1;
		if (memo[x] > 0) return memo[x];
		memo[x] = climb(x - 1, memo) + climb(x - 2, memo);
		return memo[x];
	};
	return climb(n, memo);
};

/*
The idea is that the number of ways to climb a staircase(given that we can only make 1 or 2 steps at a time, is the total number of ways we can make n-1 + n-2 steps) with our base case being -1 when n is negative and 1 when n is 0 or 1. Using memoization, we can reduce the time complexity from 2^n to n. I read about other ways of making the time complexity O(log n) and the space constant. But I'll learn those algorithms well some other time. :) 
*/
