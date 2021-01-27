// Link to challenge -> https://leetcode.com/problems/reverse-integer/submissions/

// less efficient
var reverse = function (x) {
	const sign = Math.sign(x);
	x = Math.abs(x).toString();
	let lower = -(2 ** 31);
	let upper = 2 ** 31 - 1;
	let reversed = parseInt(x.split("").reverse().join(""));
	reversed *= sign;
	return reversed < lower || reversed > upper ? 0 : reversed;
};

// more efficient
var reverse = function (x) {
	const sign = Math.sign(x);
	x = Math.abs(x);
	let reversed = 0;
	let lower = -(2 ** 31);
	let upper = 2 ** 31 - 1;

	while (x > 0) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	reversed *= sign;
	return reversed < lower || reversed > upper ? 0 : reversed;
};
