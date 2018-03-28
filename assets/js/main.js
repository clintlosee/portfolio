$(function() {
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cl-top'),
        $window = $(window);

    // Hide-Show back-to-top link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cl-is-visible') : $back_to_top.removeClass('cl-is-visible cl-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cl-fade-out');
        }
    });

    // Smooth scroll
    $back_to_top.on('click', function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0,
            }, scroll_top_duration);
    });
    
    // Parallax BG effect
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this);

        $window.scroll(function() {
            // scroll the bg at var speed
            // the yPos is a negative value because we're scrolling it up
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together final bg position
            var coords = '50%' + yPos + 'px';

            // Move the bg
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    // Enable headroom on paradeiser menu
    var myElement = document.querySelector(".paradeiser");
    var headroom  = new Headroom(myElement, {
        tolerance : 5
    });
    headroom.init();
});