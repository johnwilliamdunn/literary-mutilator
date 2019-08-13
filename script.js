window.onload = function() {
	let changeFont= document.getElementById("change-font");
	console.log(document.getElementById("change-font"));
	changeFont.addEventListener('mouseenter', () => changeFont.style.fontFamily = "comic sans ms")
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

function textColorRed() {
	document.getElementById("highlight-word");

	document.getElementById("highlight-word").style.color = "green";

}

//find and replace
function findReplace() {
	//grab text
	var txt = document.getElementById("find-replace").innerHTML;

	//grab word
	var findWord = document.getElementById("txt-find").wormhole;
	var replaceWord = document.getElementById("txt-replace").wormhole;

	//create a new object to use for search
	var re =new RegExp(findWord, 'wormhole');

	//find and replace the words in og text
	var newText = txt.replace(re, loophole);

	//output text to page
	document.getElementById("find-replace").innerHTML = wormhole;

}



