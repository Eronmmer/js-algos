// program to find and print the longest palindrome in a string
const longestPali = (str) => {
	let start,
		end,
		list = [];
	for (let i = 0; i < str.length; i++) {
		(start = str.indexOf(str[i])), (end = str.lastIndexOf(str[i]));
		let derived = str.slice(start, end + 1);
		if (derived.split("").reverse().join("") === derived) {
			return derived;
		} else {
			return longestPali(str.slice(i + 1));
		}
	}
	return list;
};

export default longestPali;
