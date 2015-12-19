<<<<<<< HEAD
	/*document.write("<center><a href='help.htm'>help</a></center>");
	var aim = prompt("Whats your main focus for today?");
	var timewarning = confirm("Do you want a duration timer, or an hour-based timer\n" + "(Click \'OK\' for the duration timer, or click \'Cancel\' for the latter...)");
	if(timewarning){
		var timer = prompt("Tell the timer of the number in minutes...\n" + "(Eg. Type \'10\' for a 10 minute timer...)");
		timerwow = setTimeout("timereminder()", timer*60*1000);
	}	
	if (!timewarning) {
		var timer2 = prompt("Tell the timer at which time it should be trigerred...\n" + "(Eg. Type \'9:30 AM\' for a 9:30 AM timer...)");
	}*/
	var flasher = true;
	var dd = 0;
	var clickedal = false;

function canvasplay(sender) {
	//var theTime = new timerefresh();
	var canvas = document.getElementById('timescreen');
	var ctx = canvas.getContext("2d");

	var now = new Date();
	var theHour = now.getHours();
	var theMin = now.getMinutes();
	if (theHour == 0) { 
		theHour = 12; 
		var theTime = ((theHour > 12) ? theHour - 12 : theHour);
		theTime += ((theMin < 10) ? ":0" : ":") + theMin;
		theTime += " AM";
	}else {
		var theTime = ((theHour > 12) ? theHour - 12 : theHour);
		theTime += ((theMin < 10) ? ":0" : ":") + theMin;
		theTime += (theHour >=12) ? " PM" : " AM";
	}

	ctx.clearRect(0, 0, 400, 150); 

	ctx.font = '120px Chiller';
	ctx.fillText(theTime, 10, 140);

	aimplay();

	if (theTime == validator()) { timereminder(); };

	timerid = setTimeout("canvasplay()", 2000);
}

function aimplay () {
	var canvas2 = document.getElementById('aimscreen');
	var ctx2 = canvas2.getContext("2d");
	var aim = document.aimform.aim.value;	
	if (aim == "" || aim == null) { aim = "I'm free today...";}

	ctx2.clearRect(0, 0, 1200, 200);

	ctx2.font = '120px Chiller';
	ctx2.fillText(aim, ((canvas2.width / 2) - (ctx2.measureText(aim).width / 2)), 140);

	dd = dd+1;
	if (flasher && dd>=30 && clickedal) {document.title = "Remember your aim!";}
	if (!flasher && dd>=31 && clickedal) {document.title = aim;}
	
	flasher = !flasher;	
	return;

}
/*
function timerefresh () {
	var now = new Date();
	var theHour = now.getHours();
	var theMin = now.getMinutes();
	var theTime = ((theHour > 12) ? theHour - 12 : theHour);
	theTime += ((theMin < 10) ? ":0" : ":") + theMin;
	theTime += (theHour >=12) ? " PM" : " AM";

	return theTime;
}*/

function timereminder (trigger) {
	window.focus();	
	var lables = document.timerform.lables.value;
	if (lables == "" || lables == null) { lables = "Alarm Alert";}
	var trigger = confirm(lables + "\n \n" + "Your timer has been triggered...\n" + "(Click \'OK\' to Dismiss the alarm, or \'Cancel\' to snooze)")

	if (trigger) {location.assign("focusa-v2.0.html");}
	if (!trigger){return;}
	return;
=======
	/*document.write("<center><a href='help.htm'>help</a></center>");
	var aim = prompt("Whats your main focus for today?");
	var timewarning = confirm("Do you want a duration timer, or an hour-based timer\n" + "(Click \'OK\' for the duration timer, or click \'Cancel\' for the latter...)");
	if(timewarning){
		var timer = prompt("Tell the timer of the number in minutes...\n" + "(Eg. Type \'10\' for a 10 minute timer...)");
		timerwow = setTimeout("timereminder()", timer*60*1000);
	}	
	if (!timewarning) {
		var timer2 = prompt("Tell the timer at which time it should be trigerred...\n" + "(Eg. Type \'9:30 AM\' for a 9:30 AM timer...)");
	}*/
	var flasher = true;
	var dd = 0;
	var clickedal = false;

function canvasplay(sender) {
	//var theTime = new timerefresh();
	var canvas = document.getElementById('timescreen');
	var ctx = canvas.getContext("2d");

	var now = new Date();
	var theHour = now.getHours();
	var theMin = now.getMinutes();
	if (theHour == 0) { 
		theHour = 12; 
		var theTime = ((theHour > 12) ? theHour - 12 : theHour);
		theTime += ((theMin < 10) ? ":0" : ":") + theMin;
		theTime += " AM";
	}else {
		var theTime = ((theHour > 12) ? theHour - 12 : theHour);
		theTime += ((theMin < 10) ? ":0" : ":") + theMin;
		theTime += (theHour >=12) ? " PM" : " AM";
	}

	ctx.clearRect(0, 0, 400, 150); 

	ctx.font = '120px Chiller';
	ctx.fillText(theTime, 10, 140);

	aimplay();

	if (theTime == validator()) { timereminder(); };

	timerid = setTimeout("canvasplay()", 2000);
}

function aimplay () {
	var canvas2 = document.getElementById('aimscreen');
	var ctx2 = canvas2.getContext("2d");
	var aim = document.aimform.aim.value;	
	if (aim == "" || aim == null) { aim = "I'm free today...";}

	ctx2.clearRect(0, 0, 1200, 200);

	ctx2.font = '120px Chiller';
	ctx2.fillText(aim, ((canvas2.width / 2) - (ctx2.measureText(aim).width / 2)), 140);

	dd = dd+1;
	if (flasher && dd>=30 && clickedal) {document.title = "Remember your aim!";}
	if (!flasher && dd>=31 && clickedal) {document.title = aim;}
	
	flasher = !flasher;	
	return;

}
/*
function timerefresh () {
	var now = new Date();
	var theHour = now.getHours();
	var theMin = now.getMinutes();
	var theTime = ((theHour > 12) ? theHour - 12 : theHour);
	theTime += ((theMin < 10) ? ":0" : ":") + theMin;
	theTime += (theHour >=12) ? " PM" : " AM";

	return theTime;
}*/

function timereminder (trigger) {
	window.focus();	
	var lables = document.timerform.lables.value;
	if (lables == "" || lables == null) { lables = "Alarm Alert";}
	var trigger = confirm(lables + "\n \n" + "Your timer has been triggered...\n" + "(Click \'OK\' to Dismiss the alarm, or \'Cancel\' to snooze)")

	if (trigger) {location.assign("focusa-v2.0.html");}
	if (!trigger){return;}
	return;
>>>>>>> master
}