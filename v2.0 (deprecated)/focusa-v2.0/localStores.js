function save (name , value) {
	localStorage.setItem(name , value);
	var result = 'saving ' + name + ': ' + value;
	return result;
}

function load (name) {
	var value = localStorage.getItem(name);
	return value;
}

function remove (name) {
	var value = localStorage.getItem(name);
	localStorage.removeItem(name);
	var result = "removing" + name + "with" + value;
	return result;
}