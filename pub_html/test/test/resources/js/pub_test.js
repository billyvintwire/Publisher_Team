
$(window).ready(function(){
    // on off 
    function nav_li_on(){
        $('.nav > li').removeClass('on');
        $('.nav > li > span').css('color','#000');
        
    }
    
    function nav_li_off(){
        $('.nav > li').removeClass('on');
        $('.nav > li > span').css('color','#fff');
        
    }
    
    function nav_li_lab2_off(){
        $('.nav_lab2').css({
            'left':0 +"%",
            'display':'none'
        })
        $('.nav_lab2 ul').hide()
        
    }
    
    function nav_wrap_off(){
        $('.nav_wrap').stop().hide();
        $('.menu_btnarea').find('img').attr('src','./resources/img/menu.png')
        nav_li_lab2_off()
        nav_li_off()

        $('.nav_wrap').css({
            'width':50 + "%"
        });
    }
	// menu_btnarea_on 
    $('.menu_btnarea').click(function(){
        var nav_h = $('.text_wrap').outerHeight();
        $('.nav_wrap').height(nav_h);
        $('.menu_btnarea').find('img').attr('src','./resources/img/menu_on.png')
        
        if( $('.nav_wrap').css('display') == 'none'){
            
            $('.nav_wrap').stop().slideDown();
        }else{
           
            nav_wrap_off() 
        }
    });
    $('.close_btnarea').click(function(){
        nav_wrap_off()
    });
    
    // nav_lab2_on
    $('.nav > li').click(function(){
        nav_li_on()
        var nav_li_idx = $(this).index();
        
        $(this).addClass('on');
        $('.nav_wrap').css({
            'width':100 + "%"
        });
        $('.nav_lab2').css({
            'display':'block',
            'left':50 +"%"
        })
        $('.nav_lab2 ul').hide()
        $('.nav_lab2 ul').eq(nav_li_idx).show()
    });
    
    // button_test 중
 
    $('.press_button').click(function(){
        var btns = document.getElementsByClassName('press_btns').length;
        if(btns == 0){
          $('#press_wrap').append(
            " <div class='press_btns'> </div>"
            )
        }
        if(btns == 1){
          $('#press_wrap').append(
            " <div class='press_btns'> </div>"
            )
 
        }
        if(btns == 2){
            
          $('#press_wrap').html('');
            
        }
        var i
        for(i = 0 ; i < btns + 1 ; i++){
            $('.press_btns').eq(btns).append(
                "<img src='./resources/img/press_btn.png' />"
            )
        }
        
    });
    
    //visual_wrap 중~상 플러그인 이용시 하
    function main_slider(){
        
    }
    
    //text_slider_wrap
});




































