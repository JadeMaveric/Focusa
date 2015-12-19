var timertype;
var sender;
var problem = true;
var timerwow;

function validator(gg) {
if (gg) {
	if(timertype==null) {
		alert("Please choose the type of timer you want...");
		problem = true;
		return;
	}
	if (timertype) {
		if (isNaN(document.timerform.durata.value)) { 
			alert("Please enter a number in the textbox...");
			problem = true;
			return;
		}
		if (document.timerform.durata.value==null) {
			alert("Please enter a number in the textbox...");
			problem = true;
			return;
		} else {
			problem = false;
			var duration = document.timerform.durata.value;
			if (timerwow ==null){timerwow = setTimeout("timereminder()", duration*60*1000)};
		}
		sender =  duration;
	}
	if(!timertype) {
		if (isNaN(document.timerform.hours.value) && isNaN(document.timerform.mins.value)) {
		 	alert("Please enter a number in the \'HH\' and \'MM\' textboxes...");
		 	problem = true;
		 	return;
		}
		if (document.timerform.hours.value==null && document.timerform.mins.value==null) {
			alert("Please enter a number in the \'HH\' and \'MM\' textboxes...");
		 	problem = true;
		 	return;
		}
		if(document.timerform.hours.value>12){
			alert("Enter a valid time...");
			problem = true;
			return;
		}
		if(document.timerform.mins.value>=60) {
			alert("Enter a valid time...");
			problem = true;
			return;
		} else { 
			var hours = parseInt(document.timerform.hours.value);
			if (hours == 0) { hours = 12};
			if (document.timerform.mins.value<10) { var minutes= "0" + document.timerform.mins.value}else{var minutes= document.timerform.mins.value};
			var timerbase = hours + ":" + minutes + " " + document.timerform.meridian.value;
			problem = false;
		}
		sender = timerbase;
	}
	if (!problem && gg) {
		document.timerform.style.opacity = 0;     //transparency of forms if there is no problem...
		document.aimform.style.opacity = 0;
	}
}
return sender;
}

function opacity() {
		document.timerform.style.opacity = 100;
		document.aimform.style.opacity = 100;
}