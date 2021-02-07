/*
QUESTION 👇
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 
*/

function isUnique(string) {
	//Assuming the input is an ASCII string,
	if (string.length > 128) return false;
	let chars = new Array(128).fill(false);
	for (let i = 0; i < string.length; i++) {
		let code = string.charCodeAt(i);
		if (chars[code]) {
			return false;
		}
		chars[code] = true;
	}
	return true;
}

// Making use of a hash table to store the characters of the string
function isUnique(string) {
	const hash = {};
	for (let i = 0; i < string.length; i++) {
		if (hash[string[i]]) {
			return false;
		} else {
			hash[string[i]] = true;
		}
	}
	return true;
}

// Since the question says we are not allowed to use additional data structures, another way of solving this problem follow that constraint is comparing each character in the string with every other character. This would take o(n^2) time and O(1) space

console.log(isUnique("erons"));
console.log(isUnique("eronse"));
console.log(isUnique("ss"));
console.log(isUnique("Abacus"));
console.log(isUnique(""));
