//alert("js trong script->start");

function initLoaded(){
	initCorner();
}
function initCorner(){
	$(".travel-corner").corner('8px');
	$(".travel-corner-left").corner('8px left');
	$(".travel-corner-right").corner('8px right');
	$(".travel-corner-top").corner('8px top');
	$(".travel-corner-bottom").corner('8px bottom');
	$(".travel-corner-4b").corner('4px bottom');
}
$(document).ready(function() {
	initLoaded();
	//alert("js trong script->ready");
});
//alert("js trong script->end");