// frequency counter
// PROBLEM: Given two arrays, return a boolean to show if the elements in the second array are squares of the elements in the first array
const square = (arr1, arr2) => {
	let obj1 = {},
		obj2 = {};
	for (let elem of arr1) {
		obj1[elem] = (obj1[elem] || 0) + 1;
	}
	for (let elem of arr2) {
		obj2[elem] = (obj2[elem] || 0) + 1;
	}

	for (let key in obj1) {
		if (!obj2[key ** 2] || obj1[key] !== obj2[key ** 2]) {
			return false;
		}
	}
	return true;
};

// the same approach can be used to solve anagrams
// the beauty of this algorithm is the fact that you can achieve a time complexity of O(n) and not O(n^2)
