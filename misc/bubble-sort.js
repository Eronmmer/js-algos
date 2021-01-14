// An inefficient implementation of bubble sort
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};

// A more efficient one
const bubbleSort2 = (arr) => {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
};

/* 
The main idea of bubble sort it to keep comparing values with the next and swapping until the array/list is sorted. So, larger values keep bubbling the end of the array. There are techniques to ensure that the runtime is as less than O(n^2) as possible. Eg, breaking out of the loop when there are no swaps after a complete cycle and ensuring the inner loop doesn't compare the last element with null or undefined
*/

console.log(bubbleSort2([88, 1, 2, 3, 4, 5, 6, 7, 78]));
