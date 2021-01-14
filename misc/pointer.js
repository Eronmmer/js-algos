// PROBLEM: Given a sorted array, return the first two elements whose sum gives 0

const testCase = [-4, -3, -2, -1, 0, 5, 10, 44];
const sumZero = (sortedArr) => {
	let i = 0,
		j = sortedArr.length - 1;

	while (i < sortedArr.length && j > 0) {
		const first = sortedArr[i],
			second = sortedArr[j];
		if (first + second === 0) {
			return [first, second];
		}
		i++;
		j--;
	}
	return undefined;
};

console.log(sumZero(testCase));
