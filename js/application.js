$(document).ready(function() {
	$(".custom-menu-options").on("mouseenter", function() {
		$(".submenu").slideDown("fast");
	}).on("mouseleave", function() {
		$(".submenu").slideUp("fast");
	});
});