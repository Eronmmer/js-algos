// Link to problem -> https://leetcode.com/problems/add-digits/

// Naive approach -> runtime is logarithmic
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	let temp = 0;
	while (num > 0) {
		temp += num % 10;
		num = Math.floor(num / 10);

		if (num === 0 && temp > 9) {
			num = temp;
			temp = 0;
		}
	}
	return temp;
};

// efficient approach -> runtime is constant
// Find the explanation here -> https://leetcode.com/problems/add-digits/solution/
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	return num === 0 ? 0 : num % 9 === 0 ? 9 : num % 9;
};
