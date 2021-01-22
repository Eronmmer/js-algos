// Link to challenge: https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
// Naive approach. Time complexity -> O(n^3)
var longestPalindrome = function (s) {
	if (s.length <= 1) {
		return s;
	}
	let longest = "";
	const isPalindrome = (string) => {
		let i = 0,
			j = string.length - 1;
		while (j > i) {
			if (string[i] !== string[j]) {
				return false;
			}
			j--;
			i++;
		}
		return true;
	};
	for (let i = 0; i < s.length; i++) {
		let j = s.length - 1;
		while (j >= i) {
			if (s[i] === s[j]) {
				let current = s.slice(i, j + 1);
				if (isPalindrome(current) && current.length > longest.length) {
					longest = current;
				}
			}
			j--;
		}
	}
	return longest;
};

// More efficient with time complexity of O(n^2)
var longestPalindrome = function (s) {
	let longestString = "";
	if (s.length <= 1) {
		return s || longestString;
	}

	for (let i = 0; i < s.length; i++) {
		let L = i,
			R = i;
		while (L >= 0 && R < s.length && s[L] === s[R]) {
			let current = s.slice(L, R + 1);
			if (R - L + 1 > longestString.length) {
				longestString = current;
			}
			R++;
			L--;
		}

		L = i;
		R = i + 1;
		while (L >= 0 && R < s.length && s[L] === s[R]) {
			let current = s.slice(L, R + 1);
			if (R - L + 1 > longestString.length) {
				longestString = current;
			}
			R++;
			L--;
		}
	}
	return longestString;
};
