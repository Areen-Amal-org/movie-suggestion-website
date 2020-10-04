$("#enter").keypress( function(event) {
	if(event.keyCode === 13) {
		$("#GFG_Button").click();
	}
});
$("#enter").click(function() {
	alert("hello");
})