// Link to problem -> https://leetcode.com/problems/shortest-palindrome
// CATEGORY: strings, palindrome

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
	if (s.length <= 1) return s;
	const isPali = (str) => {
		let i = 0,
			j = str.length - 1;
		while (i < j) {
			if (str[i] !== str[j]) return false;
			i++;
			j--;
		}
		return true;
	};
	for (let i = s.length; i >= 1; i--) {
		if (isPali(s.substr(0, i))) {
			return s.substr(i).split("").reverse().join("") + s;
		}
	}
};

/* The idea of the solution above is that to derive the shortest palindrome from a string by adding characters only to the beginning, you have to find the longest palindrome in the original string and add the reverse of the rest of the characters to the beginning of the string  */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
	let reverse = s.split("").reverse().join(""),
		n = s.length;
	for (let i = 0; i < n; i++) {
		if (s.substr(0, n - i) === reverse.substr(i))
			return reverse.substr(0, i) + s;
	}
	return "";
};
