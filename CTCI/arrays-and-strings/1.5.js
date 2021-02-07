/*
QUESTION 👇
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false
*/

function oneAway(s1, s2) {
	if (Math.abs(s1.length - s2.length) > 1) return false;
	if (s1.length === s2.length) return replace(s1, s2);
	if (s1.length > s2.length) return removeInsert(s2, s1);
	if (s2.length > s1.length) return removeInsert(s1, s2);

	function replace(s1, s2) {
		let foundDifference = false;
		for (let i = 0; i < s1.length; i++) {
			if (s1.charAt(i) !== s2.charAt(i)) {
				if (foundDifference) return false;
				foundDifference = true;
			}
		}
		return true;
	}
	function removeInsert(s1, s2) {
		let i = 0,
			j = 0;
		while (i < s1.length && j < s2.length) {
			if (s1.charAt(i) !== s2.charAt(j)) {
				if (i !== j) return false;
				j++;
			} else {
				i++;
				j++;
			}
		}
		return true;
	}
}
console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bae"));
