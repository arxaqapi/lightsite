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
/*  tryed to make a dark mode switcher with ONE button, is not working like expected
function changeMode() {
	let stylesheet = document.getElementById('stylesheet').href;

	if (stylesheet === 'css/main.css')
	{
		stylesheet.setAttribute('href', 'css/main2.css');
	} else 
	{
		stylesheet.setAttribute('href', 'css/main.css');
	}
}


function changeMode() {
	var stylesheetHref = document.getElementById('stylesheet').href;
	if(stylesheetHref == 'css/dark.css') {
		stylesheetHref = 'css/main.css';
	} 
	else {
		stylesheetHref = 'css/dark.css';
	}
}

function changeModeToDark() {
	document.getElementById('stylesheet').href = 'css/dark.css';
	document.getElementById('toDark').style.display = 'none'
}
function changeModeToMain() {
	document.getElementById('stylesheet').href = 'css/main.css';
	document.getElementById('toMain').style.display = 'none'
}*/