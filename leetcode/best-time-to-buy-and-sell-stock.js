// Link to challenge -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let min = Number.MAX_SAFE_INTEGER,
		maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < min) {
			min = prices[i];
		} else {
			let curProfit = prices[i] - min;
			if (curProfit > maxProfit) maxProfit = curProfit;
		}
	}
	return maxProfit;
};

/* 
The idea is to keep track of just the maximum profit. By assuming value in each iteration is the min value, if that is not the case, the maximum profit is updated by subtracting the current value from the min value. That's why the minimum value was initialized to be a very large number.
*/
