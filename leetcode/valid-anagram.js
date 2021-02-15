// Link to problem -> https://leetcode.com/problems/valid-anagram

// Naive approach, -> The idea is that two words are valid anagrams of each other if they produce the same word after sorting.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	return s.split("").sort().join("") === t.split("").sort().join("");
};

// A more Optimized approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	const map = {};
	for (let i = 0; i < s.length; i++) {
		map[s[i]] = ++map[s[i]] || 1;
	}
	for (let j = 0; j < t.length; j++) {
		let freq = --map[t[j]];
		if (isNaN(freq) || freq < 0) return false;
	}
	return true;
};

// The idea is that two words are valid anagrams or permutations of each other if they're of the same length and have the same frequency on all characters
