// link to challenge => https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

function revrot(str, sz) {
	if (sz <= 0 || !/\S/.test(str) || sz > str.length) {
		return "";
	} else {
		let numList = [];
		for (let i = 0; i < str.length; i++) {
			if (i % sz === 0) {
				numList.push(str.slice(i === 0 ? 0 : i, i === 0 ? sz : i + sz));
			}
		}
		numList = numList.filter((elem) => elem.length === sz);
		const reversedOrRotatedList = numList.map(elem => {
			let sumOfCubes = 0;
			for (let i = 0; i < elem.length; i++) {
				sumOfCubes += Number(elem[i]) ** 3;
			}
			if (sumOfCubes % 2 === 0) {
				return elem.split("").reverse().join("");
			} else {
				return elem.slice(1) + elem[0]
			}
		});
		return reversedOrRotatedList.join("");
	}
}
