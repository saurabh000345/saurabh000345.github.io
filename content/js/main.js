$(document).ready(() => {
	console.log("ready");
	if($(window).width() < 921){
		$(".navbar").hide();
	}
	console.log($(window).width());
});

function navbarToggler(){
	var navbar = $(".navbar");
	navbar.fadeToggle("slow")
	$(".open-menu").toggle(0);
	$(".close-menu").toggle(0);
}

$('#Projects').on('click', () => {
	alert("Projects Page is still under development!");
});