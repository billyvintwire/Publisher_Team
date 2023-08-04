$(function(){
    // include
    $('#header').load('../../include/header.html'); 
    $('#copyright').load('../../include/copyright.html'); 
    
    // gnb
    function gnb(){
        $(document).on('mouseenter', '.gnb-menu', function(){
            $('#header').addClass('active');
        });

        $(document).on('mouseleave', '.gnb-menu', function(){
            $('#header').removeClass('active');
        });
    }gnb();

    // datepicker custom
    $('.datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        changeYear: true,
        changeMonth: true,
    });
    
    // checkbox
    function tableCheck(e){
        var target = $(e.target);
        var allccheck = $('.allcheck')
        var checkTable = target.parents('table');
        var checkTableBody = target.parents('table').find('tbody');

        //all check
        function tableCheckAll(){
            if(target.prop('checked') == true){
                checkTable.find('input[type="checkbox"]').prop('checked',true);
            }else if(target.prop('checked') == false ){
                checkTable.find('input[type="checkbox"]').prop('checked',false);
            }
        };
        // on addClass
        function tableCheckBg(){
            let tbodyCheck = checkTableBody.find('input[type="checkbox"]')
            for (let i = 0; i < tbodyCheck.length; i++) {
                if(tbodyCheck.eq(i).prop('checked') == true ){
                    tbodyCheck.eq(i).parents('tr').addClass('on')
                }else{
                    tbodyCheck.eq(i).parents('tr').removeClass('on')
                }
            }      
        };
        if(target.hasClass('allcheck') == true){
            tableCheckAll()
            tableCheckBg()
        }
        if(target.hasClass('allcheck') == false){
            allccheck.prop('checked',false)
            tableCheckBg()
        }
    }

    $('.table-wrap table input[type="checkbox"]').on('click',function(e){
        tableCheck(e)
    });

    $('.txt-check').on('click', function(){
        if($(this).find('input[type="checkbox"]').is(':checked')){
            $(this).addClass('on');
        }else{
            $(this).removeClass('on');
        }
    });    

    // popup
    function popup(){
        if($('.popup').hasClass('on') === true){
            $('body').addClass('fixed');
        }else{
            $('body').removeClass('fixed');
        }

        $('.closed-btn').on('click', function(){
            $(this).parents('.popup-cont').removeClass('on');
            $('.popup').removeClass('on');
            $('body').removeClass('fixed');
            console.log('팝업닫기')
        });
    }popup();

    // count
    function count(){
        $('.count button').on('click', function(e){
            e.preventDefault();
            var $count = $(this).parent('.count').find('.inp');
            var now = parseInt($count.val());
            var min = 1;
            var max = 9999;
            var num = now;

            if($(this).hasClass('minus')){
                var type = 'm';
            }else{
                var type = 'p';
            }

            if(type=='m'){
                if(now>min){
                    num = now - 1;
                }
            }else{
                if(now<max){
                    num = now + 1;
                }
            }

            if(num != now){
                $count.val(num);
            }
        });
    }count();

    // tab
    function tab(){
        $('.tab-list li').on('click', function(){
            $(this).addClass('on').siblings().removeClass('on');
        });
    }tab();

    $('.switch .btn-toggle').on('click', function(){
        if($(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(this).attr('aria-pressed', 'false');
        }else{
            $(this).addClass('on');
            $(this).attr('aria-pressed', 'true');
        }
    });

    // // input-wrap
    // $('.input-wrap.remove button.remove').on('click', function(){
    //     console.log('지우기')
    //     $(this).siblings('input').html();
    // });

    // 2023-7-18 billy
    // input-file-change
    function fileChange(e){
        let $this = $(e.target);
        let fileName = $this.val();
        $this.siblings('.input-upload-name').val(fileName);
    }
    function inputLinkCheck(){
        let $this = $('.input-link-wrap');
        for (let i = 0; i < $this.length; i++) {
            let input = $this.eq(i).find('input');                           
            let lable = $this.eq(i).find('label');
            let inputVal = input.val();
            if(inputVal == ""){
                lable.removeClass('on');
            }else{
                lable.addClass('on');
            }
        }
    }inputLinkCheck();

    // input-link-Change
    function inputLinkChange(e){
        let $this = $(e.target);
        if($this.val() == "" ){
            $this.siblings('label').removeClass('on');
        }else{
            $this.siblings('label').addClass('on');
        }
    }
    // input-link-delete
    function inputLinkDelete(e){ 
        let $this = $(e.target);
        $this.removeClass('on');
        $this.siblings('input').val("");
    }
    // popupOn
    function popupOn(popupName){
        let popup = $('.popup');
        $('body').addClass("fixed");
        popup.addClass('on');
        popup.find('.'+popupName).addClass('on');
    };
    // popupOff
    function popupOff(){
        let popup = $('.popup');
        popup.removeClass('on');
        $('body').removeClass('fixed');
        popup.find('.popup-cont').removeClass('on');
    }
    //fileImageSize
    function fileImageSize(max,e){
        let maxSize = max * 1024 * 1024;
        let $this = $(e.target);
        let files = $this[0].files[0].size;
        if(files> maxSize){
            popupOn('popup-filesize');
            $this.val("");
        } 
    }
    // brand search pop
    $('.main-brand-btn').on('click',function(){
        popupOn('popup-brandsearch');
    });
    // input-file 
    $(".input-file-wrap .input-file").on('change',function(e){
        fileImageSize(0.05,e);
        fileChange(e);
    });
    // input-link
    $(".input-link-wrap label").on("click",function(e){
        inputLinkDelete(e);
    });
    $(".input-link-wrap input").on("change",function(e){
        inputLinkChange(e);
    });
});