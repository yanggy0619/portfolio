$(document).ready(function() {
    // #gnb
    $('.btn').on('click', function () {

        if($(this).hasClass('close')){ //닫기
            $('html, body').removeAttr('style');
            $('#dim').fadeOut(function () {
                $(this).remove();
            });
            $('.gnb').animate({opacity: 0}, 300, function () {
                $(this).css({visibility: 'hidden'}).removeClass('active');
                $('.btn').removeClass('close');
            })
        } else { //열기
            const wrapHeight = $('#wrap').outerHeight();
            $('html, body').css({height: wrapHeight, overflow: 'hidden'});
            $('.gnb').before('<div id="dim"></div>');
            $('#dim').stop().fadeIn().next().css('visibility', 'visible').find('[data-link="first"]').focus();

            $('.gnb').addClass('active').css({visibility: 'visible'}).delay(500).animate({opacity: 1},500);
            $('.btn').addClass('close');
        }
        //dim을 클릭하면 닫기 버튼을 클릭한것 처럼 동일하게 처리
        $('#dim').on('click', function () {
                $('.btn.close').click();
            });
        return false;
    });


    // #cnt1
    let currentX = '';
    let currentY = '';
    const moveDis = 0.005;
    $('#cnt1').mousemove(function(e){
        if (currentX == '') currentX = e.pageX;
        const xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        const ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('#cnt1 .mouseM').each(function(i, el) {
            let movement = (i + 1) * (xdiff * moveDis);
            let movementy = (i + 1) * (ydiff * moveDis);
            const newX = $(el).position().left + movement;
            const newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY + 'px');
        });
    });

    //#cnt2
/*         $('#cnt2, #cnt4').mousemove(function (e) {
        $('.cursor1').css({left: e.pageX, top: e.pageY});
        setTimeout(function() {
            $('.cursor2').css({left: e.pageX,top: e.pageY});
          }, 100);
        }); */
     


    // #cnt3
    const $acdn = $('#cnt3 .accordion')
    // 1) header의 초기설정 아코디언 패널이 열려있는지 열려있지 않는지
    $acdn.find('.header').attr({'aria-expanded': false});
    // 2) 키보드제어 - 상단방향키(38), 하단방향키(40), home(36), end(35), enter/spacebar(click 이벤트가 대신함)

    // 3) 마우스제어 - 클릭이벤트
    $acdn.find('.header').on('click', function () {
        if ($(this).hasClass('on')) {//열려진 경우 =>현재 열려진 헤더,패널 초기화
            $(this).removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled').parent().next().removeClass('on').attr({tabIndex: -1});
        } else{ // 닫긴경우
        //아코디언 헤더
        $(this).addClass('on').attr({'aria-expanded': true, 'aria-disabled': true}).parent().siblings('.title').children().removeClass('on').attr({'aria-expanded': false}).removeAttr('aria-disabled');

        //아코디언 패널
        $(this).parent().next().addClass('on').attr({tabIndex : 0}).siblings('.panel.on').removeClass('on').attr({tabIndex: -1});
        }
        
    });

    // #cnt4
    $('#cnt4 .next').click('on', function () {
        $(this).parents('.project1').css({visibility: 'hidden', overflow: 'hidden', maxHeight: 0}).next().css({visibility: 'visible', maxHeight: 5000})
    });
    $('#cnt4 .prev').click('on', function () {
        $(this).parents('.project2').css({visibility: 'hidden', overflow: 'hidden', maxHeight: 0}).prev().css({visibility: 'visible', maxHeight: 5000})
    });

    // #footer 배경색변경
    $(document).scroll(function() {
          const scroll = $(this).scrollTop();
          console.log(scroll); //콘솔로 좌표값 찍어보기
          if (scroll >= 3800) { 
            $('#footer').css({'background-color': '#EBCBC0', 'transition': 'background-color 1.5s ease'});
          }
      });
});
