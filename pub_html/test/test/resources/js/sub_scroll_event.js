$(window).ready(function(){
	var w_height = $(window).height();

	var src_title = document.getElementsByClassName('scr_title')
		for (b = 0; b < src_title.length; b++) {
			src_title_top = $('.scr_title').eq(b).offset().top - w_height - 50
			$('.scr_title').eq(b).attr('data-title',src_title_top);
			$('.scr_title').css({'animation-delay' : '0','animation-duration':'1.5s'});
			$('.scr_title').eq(b).addClass('scr_title'+b);
		};
	
	var src_icons = document.getElementsByClassName('scr_icons')
		for (c = 0; c < src_icons.length; c++) {
			var icons_time =  (0.5 * c) + 1;
			var icons_delay = (0.1 * c);
			src_title_top = $('.scr_icons').eq(c).offset().top - w_height - 50
			$('.scr_icons').eq(c).attr('data-icons',src_title_top);
			$('.scr_icons').eq(c).css({'animation-delay' : '0s','animation-duration': icons_time + 's','opacity':'1 !important'});
			$('.scr_icons').eq(c).addClass('scr_icons'+c);
		};
	var scr_mafas = document.getElementsByClassName('scr_mafa')
		for (scr_mafa_i = 0; scr_mafa_i < scr_mafas.length; scr_mafa_i++) {
			scr_mafas_top = $('.scr_mafa').eq(scr_mafa_i).offset().top - w_height + 10;
			$('.scr_mafa').css({'animation-delay' : '0','animation-duration':'2.5s'});
			$('.scr_mafa').eq(scr_mafa_i).attr('data-mafa',scr_mafas_top);
			$('.scr_mafa').eq(scr_mafa_i).addClass('scr_mafa'+scr_mafa_i);
		}
	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		var window_wh = $(window).height();
		
		//var scr_icons_wh = $('.scr_icons').offset() - window_wh;
		//title
		for(d = 0; d < src_title.length; d++){
			var scr_title_top = $('.scr_title' + d).attr('data-title');
			if(scr >= scr_title_top){
		 		$('.scr_title' + d).addClass('fadeInUp');
			};
		};
		//icons
		for(f = 0; f < src_icons.length; f++){
			var scr_icons_top = $('.scr_icons' + f).attr('data-icons');
			if(scr >= scr_icons_top){
		 		$('.scr_icons' + f).addClass('fadeInUp');
			};
		};
		for(scr_mafas_ev = 0; scr_mafas_ev < scr_mafas.length; scr_mafas_ev++){
			var scr_mafa_top = $('.scr_mafa' + scr_mafas_ev).attr('data-mafa');
			if(scr >= scr_mafa_top){
		 		$('.scr_mafa' + scr_mafas_ev).addClass('fadeInUp');
			};
		};
		if(scr < 100){
		   //$('.header').removeClass('ac_header');
			$('.header').css({"transform":"translateY(0)","-webkit-transform":"0","opacity":"1"});
		};
		/*if(scr > 100){
        	$('.header').addClass('ac_header');
			
		};*/
		if(scr < 436){
			$('.fixed_header').css({"top":"0"});
			$('.sub_nav').css({"position":"relative","left":"0","top":"0","width":"100%"});
			$('.sub_title').css({"padding-top":"80px"});
		};
		if(scr > 280){
			$('.fixed_header').css({"top":"-136px"});
		};
		if(scr > 411){
			$('.fixed_header').css({"top":"-144px"});
			$('.sub_nav').css({"position":"fixed","left":"0","top":"0","width":"100%"});
			$('.sub_title').css({"padding-top":"130px"});
		};
	});
});
