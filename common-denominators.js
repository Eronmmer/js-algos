// link to challenge => https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

function convertFrac(lst) {
	const getLcm = (list) => {
		let keep = [], product = list.reduce((a, b) => a * b, 1);
		for (let i = 1; i <= product; i++) {
			for (let stuff of list) {
				i === 1
					? keep.push([stuff * i])
					: keep.find((e) => e[0] === stuff).push(stuff * i);
			}
			const map = [].concat.apply([], keep).reduce((obj, b) => {
				obj[b] = ++obj[b] || 1;
				return obj;
			}, {});
			if (Object.values(map).includes(list.length)) {
				return Object.keys(map).find((e) => map[e] === list.length);
			}
		}
		return product
	};

	let lcm = getLcm(lst.map((e) => Math.trunc(e[1] / e[0]))),
		str = "";
	for (let elem of lst) {
		str += `(${lcm / elem[1] * elem[0]},${lcm})`;
	}
	return str;
}

console.log(
	convertFrac([
		[1,2],
		[1, 3],
		[1, 4],
	])
);
