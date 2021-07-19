$(document).ready(function() {
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

    $('.txt').lettering();
});