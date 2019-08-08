window.onload = function() {
	let changeFont= document.getElementById("change-font");
	console.log(document.getElementById("change-font"));
	changeFont.addEventListener('mouseenter', () => changeFont.style.fontFamily = "arial")
	changeFont.addEventListener('mouseleave', () => changeFont.style.fontFamily = "times")

};

/*adding ability to change font color on mouse over*/
function textColor() {
	console.log(document.getElementById("text-color"));
	document.getElementById("text-color").style.color = "blue";
}
//adding ability to change font color on mouse leave
function revertTextColor() {
	document.getElementById("text-color").style.color = "";
}

//adding ability to highlight a word
function highlightText() {
	
}


