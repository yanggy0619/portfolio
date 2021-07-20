$(document).ready(function() {
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

    // #cnt3
    /* state정리:
    1)aria-expanded: 아코디언 패널이 열려있어서 확장된 상태는 true, 비확장된 상태는 false
    2)aria-expanded="true" 인 경우만 aria-disabled="", true(다시클릭할 수 없는경우) / false(다시 클릭할 수 있는 경우) */
    const $acdn = $('#cnt3 .accordion')

});