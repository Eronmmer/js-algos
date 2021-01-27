var myAtoi = function (s) {
	let int = 0,
		sign = 1;
	let lower = -(2 ** 31);
	let upper = 2 ** 31 - 1;
	let startCounting = false;
	for (let i = 0; i < s.length; i++) {
		if (!startCounting && s[i] === " ") {
			continue;
		}
		if (!startCounting && (s[i] === "+" || s[i] === "-")) {
			sign = s[i] === "-" ? -1 : 1;
			startCounting = true;
			continue;
		}
		if (isNaN(parseInt(s[i]))) {
			break;
		} else {
			if (!startCounting) startCounting = true;
			int = int * 10 + parseInt(s[i]);
		}
	}
	int = int ? int * sign : sign === 1 ? 0 : -0;
	return int < lower ? lower : int > upper ? upper : int;
};
