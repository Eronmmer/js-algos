// link to challenge => https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

const isPP = function (n) {
	if (n === 1) return 1;
	const returnLog = (x, y) => Math.log(y) / Math.log(x);
	for (let i = Math.ceil(Math.sqrt(n)); i >= 1; i--) {
		const log = parseFloat(returnLog(i, n)).toPrecision(15);
		if (+log % 1 === 0) {
			return [i, Math.trunc(+log)];
		}
	}
	return null;
};
