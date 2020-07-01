// link to challenge => https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

const findMissing = function (list) {
	let positive, commonDifference, arrayKeep;
	if (list[1] - list[0] > 0) {
		positive = true;
	} else {
		positive = false;
	}
	for (let i = 0; i < list.length; i++) {
		if (i + 1 < list.length) {
			if (i === 0) {
				commonDifference = list[i + 1] - list[i];
				arrayKeep = [commonDifference, list[i]];
				// array to keep track of commonDifference and current element
			} else if (list[i + 1] - list[i] < commonDifference) {
				if (positive) {
					commonDifference = list[i + 1] - list[i];
					arrayKeep[0] = commonDifference;
				} else {
					arrayKeep[1] = list[i];
				}
			} else if (list[i + 1] - list[i] > commonDifference) {
				if (positive) {
					arrayKeep[1] = list[i];
				} else {
					commonDifference = list[i + 1] - list[i];
					arrayKeep[0] = commonDifference;
				}
			}
		} else {
			return arrayKeep.reduce((a, b) => a + b, 0);
		}
	}
};

module.exports = findMissing;
