// const countUniqueValues = (arr) => {
// 	let obj = {};
// 	for (let elem of arr) {
// 		obj[elem] ? obj[elem]++ : (obj[elem] = 1);
// 	}
// 	return Object.keys(obj).length;
// };

// PROBLEM: Find the number of unique elements in a sorted array

const countUniqueValues = (arr) => {
	if (arr.length == 0) {
		return 0;
	}
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues([]));
