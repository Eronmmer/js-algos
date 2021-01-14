// Link to challenge: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message) {
	let lowerFirstCode = 97,
		upperFirstCode = 65,
		result = "";
	for (let i = 0; i < message.length; i++) {
		const char = message[i];
		if (char.toUpperCase() != char.toLowerCase()) {
			let lowerCase = char == char.toLowerCase(),
				firstCode = lowerCase ? lowerFirstCode : upperFirstCode,
				lastCode = firstCode + 25;
			let charCode = char.charCodeAt(0);
			let replaceCode =
				charCode + 13 > lastCode
					? ((charCode + 13 - firstCode) % 26) + firstCode
					: charCode + 13;
			result += String.fromCharCode(replaceCode);
		} else {
			result += char;
		}
	}
	return result;
}
