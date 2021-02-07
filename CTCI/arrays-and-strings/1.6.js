/*
QUESTION 👇
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string.You can assume the string has only uppercase and lowercase letters(a - z).
*/

function compression(string) {
	let compressed = "",
		i = 0;
	while (i < string.length) {
		let j = i;
		while (j < string.length && string[i] === string[j]) {
			j++;
		}
		let diff = j - i;
		compressed += `${string[i]}${diff}`;
		i += diff;
	}

	return compressed.length < string.length ? compressed : string;
}

console.log(compression("aabcccccaaa"));
