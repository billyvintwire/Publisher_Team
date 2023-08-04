
$(function(){
    if($('.slider_box ul').length == 0 || $('.slider_box li').length < 10) return;
    var $ul = $('.slider_box ul');
    var $li = $('.slider_box li');
    var $maxSpeed = 5; // 최대 속도
    var $minSpeed = 1; // 최소 속도
    var $speed = $minSpeed; // 속도
    var $length = $li.length;
    var $dur = 30; // 이동시간
    var $size = $li.eq(0).outerWidth() + parseInt($li.eq(1).css("margin-left"));

    function init(){
        ani();
    }

    function ani(){
        if(parseInt($ul.css("margin-left")) <= -$size){
            $ul.append($li.filter(":first-child"));
            $ul.css("margin-left",0);
        } else if(parseInt($ul.css("margin-left")) >= 0 && $speed < 0){
            $ul.prepend($li.filter(":last-child"));
            $ul.css("margin-left", -$size);	
        }

        $ul.stop().animate({"margin-left":"-="+$speed},$dur,function(){
            ani();
        });
    }

    $('.b_btn_stop').on({
        mouseenter:function(e){
            $ul.stop();
        }, mouseleave:function(e){
            ani();
        }
    });

    // prev()
    $('.b_btn_next').on('mouseenter',function(e){
        $speed = -$maxSpeed;
    }).on("mouseleave",function(e){
        $speed = $minSpeed;
    });

    // next()
    $('.b_btn_prev').on('mouseenter',function(e){
        $speed = $maxSpeed;
    }).on("mouseleave",function(e){
        $speed = $minSpeed;
    });

    init();
})



