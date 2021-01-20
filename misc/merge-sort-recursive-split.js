// the following splits an array into sub-arrays
const recursiveSplit = (arr) => {
	const result = [];
	for (let elem of arr) {
		result.push([elem]);
	}
	return result;
};

console.log(recursiveSplit([1, 2, 3, 4, 5, 6, 7, 8]));
