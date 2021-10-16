/*
	* Make by Vins 2106
	* github: https://github.com/Vins2106/easy-doc
*/

// Body

const getBody = document.body;

// Important

// query: ID
// return: HTML Object
function getDocById(str) {
	if (!str) throw Error("Need a id")

	let find = document.getElementById(str);

	if (!find) throw Error("Element not found");

	return find;
}

// query: ID, CLASS, TAG, etc
// return: HTML Object
function getQS(str) {
	if (!str) throw Error("Need id, class, tag, etc")

	let find = document.querySelector(str) 

	if (!find) throw Error("Element not found");

	return find;
}

// query: ID, CLASS, TAG, etc
// return: HTML Node Object
function getQSAll(str) {
	if (!str) throw Error("Need id, class, tag, etc")

	let find = document.querySelectorAll(str);

	if (!find) throw Error("Elements not found");

	return find;
}

// query: CLASSNAME
// return: HTML Node Object
function getDocsByClass(str) {
	if (!str) throw Error("Need a class name")

	let find = document.getElementsByClassName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

// query: NAME
// return: HTML Node Object
function getDocsByName(str) {
	if (!str) throw Error("Need a name")

	let find = document.getElementsByName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

// query: TAGNAME
// return: HTML Node Object
function getDocsByTagName(str) {
	if (!str) throw Error("Need tag name")

	let find = document.getElementsByTagName(str);

	if (!find) throw Error("Elements not found");

	return find;
}

// query: NAMESPACEURI, TAGNAME
// return: HTML Node Object
function getDocsByTagNameNS(str, str2) {
	if (!str) throw Error("Need name space uri")
    if (!str2) throw Error("Need tag name")

	let find = document.getElementsByTagNameNS(str, str2);

	if (!find) throw Error("Elements not found");

	return find;
}

// query: HTML Object, []CLASS
// return: None
function addClassTo(element, classes = []) {
	if (!element) throw Error("Need HTML Object")
	if (!classes[0]) throw Error("Valid class type is JSON")

	try {
		for (let i = 0; i < classes.length; i++) {
			element.classList.add(classes[i])
		}
	} catch (e) {
		throw Error(e)
	}
}

// query: HTML Object, []CLASS
// return: None
function removeClassFrom(element, classes = []) {
	if (!element) throw Error("Need HTML Object")
	if (!classes[0]) throw Error("Valid class type is JSON")

	try {
		for (let i = 0; i < classes.length; i++) {
			element.classList.remove(classes[i])
		}
	} catch (e) {
		throw Error(e)
	}
}

// query: HTML Object, ATTRIBUTENAME
// return: Attribute Value
function getAttrFrom(element, attr) {
	if (!element) throw Error("Need HTML Object")
	if (!attr) throw Error("Need Attribute name")

	let find = element.getAttribute(attr);

	if (!find) throw Error("Attribute not found");

	return find;
}

// query: HTML Object
// return: Attribute List
function getAttr(element) {
	if (!element) throw Error("Need HTML Object");

	let attr = element.attributes;

	if (!attr) return;

	return attr;
}

// query: HTML Object, ATTRIBUTENAME, ATTRIBUTEVALUE
// return: None
function setAttrTo(element, name, value) {
	if (!element) throw Error("Need HTML Object")
 	if (!name) throw Error("Need the attribute name")
 	if (!value) throw Error("Need the attribute value")

 	let test = element.setAttribute(name, value);

 	return test;
}

// query: HTML Object, DISPLAYTYPE
// return: Display Type
function show(element, display = "block"){
	if(!element) throw Error("Need HTML Object");
	if (!display) display = "block"

	element.style.display = `${display}`;

	return `${display}`
}

// query: HTML Object
// return: Display Type
function hide(element){
	if(!element) throw Error("Need HTML Object");

	element.style.display = `none`;

	return `none`
}

// query: HTML Object, Seconds, DISPLAYTYPE
// return: String, Type
function showAfter(element, seconds, display = "block"){
	if (!element) throw Error("Need HTML Object");
	if (!display) display = "block";
	if (!seconds) throw Error("Need Seconds");
	if (typeof seconds !== "number") throw Error("Seconds must be a number");
	if (seconds <= 0) seconds = "noSeconds";

	if (seconds === "noSeconds") {
		element.style.display = display;

		return display;
	}

	console.log(`[EASY-DOC] element will show after ${seconds} seconds`);

	setTimeout(() => {
		element.style.display = display;

		return display;
	}, seconds * 1000)
}

// query: HTML Object, Seconds
// return: String
function hideAfter(element, seconds){
	if (!element) throw Error("Need HTML Object");
	if (!seconds) throw Error("Need Seconds");
	if (typeof seconds !== "number") throw Error("Seconds must be a number");
	if (seconds <= 0) seconds = "noSeconds";

	if (seconds === "noSeconds") {
		element.style.display = "none";

		return display;
	}

	console.log(`[EASY-DOC] element will hide after ${seconds} seconds`);

	setTimeout(() => {
		element.style.display = "none";

		return "none";
	}, seconds * 1000)
}

// Utility

// query: MIN, MAX
// return: Random Number Between [min] - [max]
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)	
}

// query: None
// return: None
function scrollTop() {
	return scrollTo(0, -getBody.srollHeight)
}

// query: None
// return: None
function scrollBottom() {
	return scrollTo(0, getBody.scrollHeight)
}