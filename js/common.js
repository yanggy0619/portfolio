$(document).ready(function() {
    // #gnb
    $('.gnb').css({visibility: 'hidden',maxHeight: 0, overflow: 'hidden'});
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

            $('.gnb').addClass('active').css({visibility: 'visible', maxHeight: '1000px'}).delay(500).animate({opacity: 1},500);
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
    const moveDis = 0.02;
    $('#cnt1').mousemove(function(e){
        if (currentX == '') currentX = e.pageX;
        const xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        const ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('#cnt1 .mouseM').each(function(i, el) {
            let movementx = (i + 1) * (xdiff * moveDis);
            let movementy = (i + 1) * (ydiff * moveDis);

            if (i%2 === 0) {
                movementx = -movementx;
                movementy = -movementy;
            }
            const newX = $(el).position().left + movementx;
            const newY = $(el).position().top + movementy;
            $(el).css({left: newX + 'px', top: newY + 'px'});
        });
    });

    // #footer 배경색변경
    $(document).scroll(function() {
          const scroll = $(this).scrollTop();
          // console.log(scroll); //콘솔로 좌표값 찍어보기
          if (scroll >= 3800) { 
            $('#footer').css({'background-color': ' #f3ddd5', 'transition': 'background-color 1.5s ease'});
          }
      });


});