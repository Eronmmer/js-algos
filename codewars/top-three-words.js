// Link to challenge: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

topThreeWords = (string) => {
	string = string.toLowerCase();
	let array = string
		.split(" ")
		.filter((e) => /[a-z]/gi.test(e))
		.map((e, i) => {
			let string = e;
			for (let char of string) {
				if (
					char.charCodeAt(0) !== 39 &&
					char.toLowerCase() == char.toUpperCase()
				) {
					string = string.replace(char, "");
				}
				if (char.charCodeAt(0) === 39) {
					string = string.replace(char, "'");
				}
			}
			return string;
		});
	let obj = {};
	for (let elem of array) {
		obj[elem] = ++obj[elem] || 1;
	}
	let topValues = Object.values(obj)
		.sort((b, a) => (a < b ? -1 : 1))
		.slice(0, 3);
	return topValues.map((e) => {
		let shit = Object.keys(obj).find((key) => obj[key] === e);
		delete obj[shit];
		return shit;
	});
};
