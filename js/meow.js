//$(document).ready(function(){
//var mq = window.matchMedia("(max-width: 768px)"); 
//if(mq.matches){
//  $(".note-panel").remove();
//}else {
//$(".ul").remove;}
//})
$(document).ready(function() {

	$(".edit-content").hide();
	$("#header-create").click(function() {


		$(".meow-list").css("display", "none");
		$(".edit-content").show();
		$(".view-content").hide();
	});
	$("#show-content").click(function() {
		$(".meow-list").hide();
		$(".meow-content").css("display", "inline");
	});

})