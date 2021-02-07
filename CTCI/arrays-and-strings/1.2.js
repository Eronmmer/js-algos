/*
QUESTION 👇
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other. 
*/

// This method employs sorting and comparing the resultant strings. If they are permutations of each other, they must be equal after sorting
function isPermutation(str1, str2) {
	if (str1.length !== str2.length) return false;
	return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isPermutation(str1, str2) {
	if (str1.length !== str2.length) return false;
	let map = {};
	for (let i = 0; i < str1.length; i++) {
		map[str1[i]] = ++map[str1[i]] || 1;
	}
	for (let j = 0; j < str2.length; j++) {
		let freq = --map[str2[j]];
		if (isNaN(freq) || freq < 0) return false;
	}
	return true;
}

console.log(isPermutation("erons", "snore"));
console.log(isPermutation("shit", "stih"));
console.log(isPermutation("lol", "loL"));
