const reverseNumber = (number) => {
	let sign = Math.sign(number),
		res = "";
	number = (number * sign).toString();
	for (let elem of number) {
		res = elem + res;
	}
	return parseInt(res, 10) * sign;
};
