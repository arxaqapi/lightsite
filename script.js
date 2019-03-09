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