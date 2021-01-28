// Link to challenge -> https://leetcode.com/problems/palindrome-number/

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
