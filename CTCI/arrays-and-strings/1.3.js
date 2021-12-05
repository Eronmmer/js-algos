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

// function urlify(string, trueLength) {
// 	let spaceCount = 0,
// 		result = "";
// 	for (let i = 0; i < trueLength; i++) {
// 		if (string[i] === " ") spaceCount++;
// 	}
//
// 	for()
//
// 	let index = trueLength - spaceCount + (3 * spaceCount);
// 	let whileLoopCount = 0;
// 	while (whileLoopCount < index) {
// 		if (string[whileLoopCount] === " ") {
// 			result += "%20";
// 			whileLoopCount += 2;
// 		} else {
// 			result += string[whileLoopCount];
// 			whileLoopCount++;
// 		}
// 	}
// 	return result;
// }

// Not complete yet

function urlify(string, trueLength) {
	let index = 0, result = "";
	while(index < trueLength) {
		if(string[index] === " ") {
			result += "%20";
		} else {
			result += string[index];
		}
		index++;
	}
	return result;
}
