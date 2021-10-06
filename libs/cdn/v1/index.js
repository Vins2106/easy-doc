const getBody = document.body;

function getDocById(str) {
	let find = document.getElementById(str);

	if (!find) throw Error("Element not found");

	return find;
}

function getQS(str) {
	let find = document.querySelector(str) 

	if (!find) throw Error("Element not found");

	return find;
}

function getQSAll(str) {
	let find = document.querySelectorAll(str);

	if (!find) throw Error("Elements not found");

	return find;
}

function getDocsByClass(str) {
	let find = document.getElementsByClassName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

function getDocsByName(str) {
	let find = document.getElementsByName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

function getDocsByTagName(str) {
	let find = document.getElementsByTagName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

function getDocsByTagNameNS(str, str2) {
	let find = document.getElementsByTagNameNS(str, str2);

	if (!find) throw Error("Element not found");

	return find;
}

function addClassTo(element, classes = []) {
	if (!classes[0]) throw Error("Valid class type is JSON")

	try {
		for (let i = 0; i < classes.length; i++) {
			element.classList.add(classes[i])
		}
	} catch (e) {
		throw Error(e)
	}
}