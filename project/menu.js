
//burger
// function myFunction() 
function myFunction(){
	var x = document.getElementById('myTopnav')  

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
			x.className = "topnav";
	}
}	

//scroll
jQuery(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);

			$('#link2').click(function() { $.scrollTo($('#about_us'), 500); });
			$('#link3').click(function() { $.scrollTo($('#our_service'), 500); });
			$('#link4').click(function() { $.scrollTo($('#create_repair'), 500); });
			$('#link5').click(function() { $.scrollTo($('#contact_us'), 500); });
			$('#link6').click(function() { $.scrollTo($('#we_work'), 500); });

			$('.scrollup').click(function() { $.scrollTo($('body'), 600); });
		}
		);

//pokaz podczas przewijania strony
$(window).scroll(function()
{
	if($(this).scrollTop()>300) $('.scrollup').fadeIn();
		else $('.scrollup').fadeOut();
}
	);