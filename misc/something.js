const something = (arr, value) => {
	let i = 0,
		j = arr.length - 1;

	while (i < j) {
		if (arr[i] + arr[j] == value) {
			return true;
		}
		i++;
		j--;
	}
	return false;
};

[1, 2, 3, 9, 10];
