$(document).ready(function(){
	
	$(window).scroll(function(){
		var scroll 	= $(this).scrollTop(),
			bg 		= $('header .bg');

		bg.css({
			'top' : scroll/10+"%",
		});

		if(scroll > 50){
			$('nav').css({ 'background' : 'white', 'box-shadow' : '0 0 3px #333' });
			$('nav .logo img').css({ 'width' : '60px', });
			$('nav ul li a').css({ 'color' : 'rgba(34, 58, 94, 1)', });
		} else {
			$('nav').css({ 'background' : 'transparent', 'box-shadow' : '0 0 3px transparent'});
			$('nav .logo img').css({ 'width' : '80px', });
			$('nav ul li a').css({ 'color' : 'white', });
		}

	});



});