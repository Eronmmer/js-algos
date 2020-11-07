var moveZeros = function (arr) {
	return [...arr.filter((e) => e !== 0), ...arr.filter((e) => e === 0)];
};
