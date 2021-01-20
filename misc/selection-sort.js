// implementation of selection sort
const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
};

/* 
The main idea of selection sort is to only swap when a loop is complete. A swap is achieved by taking the least element further to the beginning of the array. 
*/
