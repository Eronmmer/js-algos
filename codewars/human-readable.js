function humanReadable(seconds) {
	let getTime = (seconds, carry = []) => {
		let keep = [...carry];
		let mod = keep.length >= 2 ? 100 : 60;
		keep.unshift(seconds % mod);
		return seconds / mod < 1
			? keep.map((e) => e.toString().padStart(2, 0))
			: getTime(Math.trunc(seconds / mod), keep);
	};
	return getTime(seconds).join(":").padStart(8, "00:");
}
