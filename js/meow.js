$(document).ready(function() {
	$("#create").click(function() {
		$("#note-content").hide();
		$("#create-note").show();
	});
	$("#give-up").click(function() {
		$("#note-content").show();
	});
	$("#view-note").click(function() {
		$("#note-content").show();
	});
	$("#create-note").submit(function(e) {
		e.preventDefault();
		var title_value = $("#title-value").val();
		var content_value = $("#content-value").val();
		$("#remove-li").remove();
		$("#get-list").append('<li>' + title_value + '</li>');
		$("#note-content").show();
		$("#remove-h1").remove();
		$("#view-note-title").append('<h1 id="remove-h1">' + title_value + '</h1>');
		$("#remove-p").remove();
		$("#view-note-content").append('<p id="remove-p">' + content_value + '</p>');
	});

})