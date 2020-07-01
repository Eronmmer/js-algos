// link to challenge => https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
	str = str.toString();
	const array = str.split(/\s/);
	const capitalizeArray = array
		.filter((elem) => elem.length > 0)
		.map((e) => `${e[0].toUpperCase()}${e.slice(1)}`);

	const result = capitalizeArray.join("");
	const resultWithHash = `#${result}`;
	if (resultWithHash.length < 2 || resultWithHash.length > 140) {
		return false;
	} else {
		return resultWithHash;
	}
}

export default generateHashtag;
