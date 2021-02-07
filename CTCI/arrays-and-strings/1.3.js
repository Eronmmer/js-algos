/*
QUESTION 👇
Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: if implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith"
*/

function urlify(string, trueLength) {
	let spaceCount = 0,
		result = "";
	for (let i = 0; i < trueLength; i++) {
		if (string[i] === " ") spaceCount++;
	}
	let index = trueLength - spaceCount + 3 * spaceCount;
	while (index > 0) {
		if (string[i] == " ") {
			result += "%20";
			index -= 3;
		} else {
			result += string[i];
			index--;
		}
	}
}

// Not complete yet
