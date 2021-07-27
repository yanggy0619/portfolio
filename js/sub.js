$(document).ready(function() {
  // cursor
  $(document).mousemove(function(e) {
    $('#cursor1').css({left: e.pageX,top: e.pageY});
    setTimeout(function() {
    $('#cursor2').css({left: e.pageX,top: e.pageY});
    }, 100);
  })
});