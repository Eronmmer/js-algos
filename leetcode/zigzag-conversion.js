// Link to challenge: https://leetcode.com/problems/zigzag-conversion/solution/

const convert = (string, numRows) => {
	if (numRows === 1) return string;
	const hash = {};
	for (let i = 0; i < Math.min(numRows, string.length); i++) {
		hash[i] = "";
	}
	let curRow = 0,
		goingDown = false;

	for (let char of string) {
		hash[curRow] += char;
		if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
		curRow += goingDown ? 1 : -1;
	}

	return Object.values(hash).join("");
};
