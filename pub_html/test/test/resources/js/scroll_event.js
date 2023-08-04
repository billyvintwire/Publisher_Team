$(window).ready(function(){
// Initialize and Configure Scroll Reveal Animation
    /*window.sr = ScrollReveal();
  	sr.reveal('.sr_button', {
		duration:1000,
		scale: 1,
		rotate: { x: 100, y: 0, z: 0 },
		distance: '0px'
	},200);
	
	sr.reveal('.sr_button_1', {
		origin:'bottom',
		duration:2000,
		scale: 1,
		rotate: { x: 0, y: 0, z: 0 },
		distance: '100px'
	},200);
	
	sr.reveal('.sr_title', {
		duration:1000,
		scale: 1,
		rotate: { x: 0, y: 0, z: 0 },
		distance: '0px'
	},200);
	
	sr.reveal('.sr_title_1', {
		duration:1000,
		scale: 1,
		rotate: { x: 0, y: 0, z: 0 },
		distance: '100px'
	},200);
	
	sr.reveal('.sr_sect',{
		duration:1000,
		scale: 1,
		distance: '200px',
		rotate: { x: 0, y: 0, z: 0 }
	},300);*/
	var w_height = $(window).height();

	var src_title = document.getElementsByClassName('scr_title')
		for (b = 0; b < src_title.length; b++) {
			src_title_top = $('.scr_title').eq(b).offset().top - w_height - 50
			$('.scr_title').eq(b).attr('data-title',src_title_top);
			$('.scr_title').css({'animation-delay' : '0','animation-duration':'1.5s'});
			$('.scr_title').eq(b).addClass('scr_title'+b);
		};
		
	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		var window_wh = $(window).height();
		
		//var scr_icons_wh = $('.scr_icons').offset() - window_wh;
		for(c = 0; c < src_title.length; c++){
			var scr_title = $('.scr_title' + c).attr('data-title');
			if(scr >= scr_title){
		 		$('.scr_title' + c).addClass('fadeInUp');
			};
		};
		if(scr < 100){
		   $('.header').removeClass('ac_header');
		};
		if(scr > 100){
        	$('.header').addClass('ac_header');
		};
		
	});
});
