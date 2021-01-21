// Link to challenge -> https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	let length = s.length;
	let values = new Set();
	let longest = 0,
		i = 0,
		j = 0;
	while (i < length && j < length) {
		if (!values.has(s[j])) {
			values.add(s[j++]);
			longest = Math.max(longest, j - i);
		} else {
			values.delete(s[i++]);
		}
	}
	return longest;
};

// solution 2
const lengthOfLongestSubstring = (s) => {
	let length = s.length;
	let values = [];
	let longest = 0,
		i = 0,
		j = 0;
	while (i < length && j < length) {
		if (!values.includes(s[j])) {
			values.push(s[j++]);
			longest = Math.max(longest, j - i);
		} else {
			values.splice(values.indexOf(s[i]), 1);
			i++;
		}
	}
	return longest;
};
