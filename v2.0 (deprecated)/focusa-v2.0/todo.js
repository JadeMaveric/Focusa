<<<<<<< HEAD
function firsttime () {
	save("0" , "");
	save("1" , "");
	save("2" , "");
	save("3" , "");
	save("4" , "");
	save("5" , "");
	save("6" , "");
	save("7" , "");
	save("8" , "");
	save("9" , "");
}

if (load("5") == null) {firsttime()};   //just a random guess to find out whether the browser has the app installed, & if not, it will install...

function toodoo () {
	document.todoform.style.opacity = 100;
	var todoform = "<b>Things to do...</b><img src='close.gif' onClick='document.todoform.style.opacity = 0;' style='position:relative; right:-90px;'> <br><hr color='#fff'><br>";
	todoform += "<form name='internalform'>"

	for (var i = 10; i >= 0; i--){
		var todo = load(JSON.stringify(i));
		if (todo != null || todo != "" && i != 10) {
			todoform += "<form name=\'" + JSON.stringify(i) + "\'>";
			todoform += "<INPUT type=\'radio\' onClick=\'todolist(" + JSON.stringify(i) + ")\'>";
		}
		if (i != 10) {
		todoform += todo + "<br>";}
		todoform += "</form>";
	}
	todoform += "<hr color='#fff'><form name = 'newtodoadder'></form>";
	todoform += "<a href='javascript:newtodo()'>Add new todo</href></form>";
	document.todoform.innerHTML = todoform;
}

function todolist (name) {
	save(name , "");
}

function newtodo() {
	var newtodoUI = "<b>New todo:</b>";
	newtodoUI +="<input type='text' name='eli' value='Enter your todo...' onClick='document.newtodoadder.eli.value = \"\"'>";
	document.newtodoadder.innerHTML = newtodoUI;

	var nene="<input type='button' value='OK' onClick='empty()'>";
	document.newtodoadder.innerHTML += nene;
}

function empty () {
	var lolo = document.newtodoadder.eli.value;
	var vacant = findnextvacanttodo();
	if (vacant == null) {
		alert("Your TODO list has filled up... Clear up some of it!")
	}
	save(vacant , lolo);
	toodoo();
}

function findnextvacanttodo() {
	for (var i = 9; i >= 0; i--) {
		if(load(JSON.stringify(i)) == "") {
			return JSON.stringify(i);
		}
	}
	return null;
=======
function firsttime () {
	save("0" , "");
	save("1" , "");
	save("2" , "");
	save("3" , "");
	save("4" , "");
	save("5" , "");
	save("6" , "");
	save("7" , "");
	save("8" , "");
	save("9" , "");
}

if (load("5") == null) {firsttime()};   //just a random guess to find out whether the browser has the app installed, & if not, it will install...

function toodoo () {
	document.todoform.style.opacity = 100;
	var todoform = "<b>Things to do...</b><img src='close.gif' onClick='document.todoform.style.opacity = 0;' style='position:relative; right:-90px;'> <br><hr color='#fff'><br>";
	todoform += "<form name='internalform'>"

	for (var i = 10; i >= 0; i--){
		var todo = load(JSON.stringify(i));
		if (todo != null || todo != "" && i != 10) {
			todoform += "<form name=\'" + JSON.stringify(i) + "\'>";
			todoform += "<INPUT type=\'radio\' onClick=\'todolist(" + JSON.stringify(i) + ")\'>";
		}
		if (i != 10) {
		todoform += todo + "<br>";}
		todoform += "</form>";
	}
	todoform += "<hr color='#fff'><form name = 'newtodoadder'></form>";
	todoform += "<a href='javascript:newtodo()'>Add new todo</href></form>";
	document.todoform.innerHTML = todoform;
}

function todolist (name) {
	save(name , "");
}

function newtodo() {
	var newtodoUI = "<b>New todo:</b>";
	newtodoUI +="<input type='text' name='eli' value='Enter your todo...' onClick='document.newtodoadder.eli.value = \"\"'>";
	document.newtodoadder.innerHTML = newtodoUI;

	var nene="<input type='button' value='OK' onClick='empty()'>";
	document.newtodoadder.innerHTML += nene;
}

function empty () {
	var lolo = document.newtodoadder.eli.value;
	var vacant = findnextvacanttodo();
	if (vacant == null) {
		alert("Your TODO list has filled up... Clear up some of it!")
	}
	save(vacant , lolo);
	toodoo();
}

function findnextvacanttodo() {
	for (var i = 9; i >= 0; i--) {
		if(load(JSON.stringify(i)) == "") {
			return JSON.stringify(i);
		}
	}
	return null;
>>>>>>> master
}