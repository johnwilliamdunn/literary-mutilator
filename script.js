window.onload = function() {
	//textColor();
	//changeFont();
};

/*adding ability to change font color on mouse over*/
function textColor() {
	document.getElementById("text-color").style.color = "blue";
}
//adding ability to change font color on mouse leave
function revertTextColor() {
	document.getElementById("text-color").style.color = "";
}

//adding ability to change font
function changeFont() {
	document.getElementById("change-font").style.fontFamily = "sans-serif";
}