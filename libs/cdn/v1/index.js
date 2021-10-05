const getBody = document.body;

function getDocById(str) {
	let find = document.getElementById(str);

	if (!find) return null;

	return find;
}

function getQS(str) {
	let find = document.querySelector(str) 

	if (!find) return null;

	return find;
}

function getQSAll(str) {
	let find = document.querySelectorAll(str);

	if (!find) return null;

	return find;
}

function getDocsByClass(str) {
	let find = document.getElementsByClassName(str);

	if (!find) return null;

	return find;
}

function getDocsByName(str) {
	let find = document.getElementsByName(str);

	if (!find) return null;

	return find;
}

function getDocsByTagName(str) {
	let find = document.getElementsByTagName(str);

	if (!find) return null;

	return find;
}

function getDocsByTagNameNS(str, str2) {
	let find = document.getElementsByTagNameNS(str, str2);

	if (!find) return null;

	return find;
}