/*
QUESTION 👇
Palindrome Permutation: Given a string, write a function to check if it is a permutation of
a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
permutation is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.
EXAMPLE
Input:
Tact Coa
Output:
True (permutations: "taco cat'; "atco eta·; etc.)
*/

// for a string to be a palindrome of a permutation, it must have an even number of all characters and optionally just one character whose length is an odd number
function isPalindromePerm(string) {
	string = string.toLowerCase();
	const map = {};
	for (let i = 0; i < string.length; i++) {
		map[string[i]] = ++map[string[i]] || 1;
	}
	const values = Object.values(map);
	return values.filter((e) => e % 2 !== 0).length === (0 || 1);
}

console.log(isPalindromePerm("TactCoa"));
