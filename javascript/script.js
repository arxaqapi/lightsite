function toggle(elementId) {
	let element = document.getElementById(elementId);
	if(element.style.display == "block") {
    		element.style.display = "none";
  	}
	else {
		element.style.display = "block";
	}
} 

window.addEventListener("load", function() {
	let f = document.getElementById('toBlinkUn');
	let f2 = document.getElementById('toBlinkAQ');
    setInterval(function() {
		f.style.display = (f.style.display == 'none' ? '' : 'none');
		f2.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 750);

}, false);

var counter = 0;

function changeMode() {
	// awfull theming to dark mode
	let root = document.documentElement.style;
	
	if(counter === 0) {
		root.setProperty("--background-light"," #141301");
		root.setProperty("--background-dark"," #e6e6e6");
		counter = 1;
	} else {
		root.setProperty("--background-light","#e6e6e6");
		root.setProperty("--background-dark"," #141301");
		counter = 0;
	}
}
//need to be automated with cookies

function checkMode() {
	if(counter === 1) {
		changeMode(); // is not working
	}
}