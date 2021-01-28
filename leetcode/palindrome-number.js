// Link to challenge -> https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let reversed = 0,
		initialInt = x;
	if (x < 0) return false;
	while (x > 0) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	return reversed === initialInt;
};

// Below is an elegant solution to handle cases where the reverse of x > Number.MAX_SAFE_INTEGER
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	// When x < 0, x is not a palindrome.
	// Also if the last digit of the number is 0, in order to be a palindrome,
	// the first digit of the number also needs to be 0.
	// Only 0 satisfy this property.
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
	let reversed = 0;
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	// Math.floor(reversed/10) handles cases where the length is an odd number
	return x === reversed || x === Math.floor(reversed / 10);
};
