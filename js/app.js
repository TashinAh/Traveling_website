new WOW().init();
$(document).ready(function(){
	$(window).on('scroll', function(){
		var scroll = $(this).scrollTop();
		if(scroll > 40) {
			$('.navbar').addClass('navbar-bg');
		}else{
			$('.navbar').removeClass('navbar-bg');
		}
	})
})