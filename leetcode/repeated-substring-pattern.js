/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	for (let i = 1; i <= Math.floor(s.length / 2); i++) {
		if (s.length % i === 0) {
			let div = s.length / i;
			let res = s.slice(0, i).repeat(div);
			if (res === s) return true;
		}
	}
	return false;
};

// The idea is to loop from the beginning of the array up to the middle(that's why you have s.length/2 there) and to ensure that a substring of length > 1 is always formed(that's why we start looping from the first index and not the 0th index)
