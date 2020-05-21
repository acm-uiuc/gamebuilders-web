 $('.highlight-clean').css({
            opacity:0
});
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if ($("#videoblock").width() < 1000){
        $('.highlight-clean').css({
            opacity:1
        });
        $("#downarrow").css({
            opacity:0
        });
    }
    else
    {
        $('.highlight-clean').css({
        opacity: function() {
                return 1 - (120 - scrollTop) / 120;
            }
        });
        $("#downarrow").css({
        opacity: function() {
                return 1 - (scrollTop) / 30;
            }
        });
    }
});
$(window).resize(function() {
    var scrollTop = $(this).scrollTop();
    if ($("#videoblock").width() < 1000){
        $('.highlight-clean').css({
            opacity:1
        });
        $("#downarrow").css({
            opacity:0
        });
    }
    else
    {
        $('.highlight-clean').css({
        opacity: function() {
                return 1 - (120 - scrollTop) / 120;
            }
        });
        $("#downarrow").css({
        opacity: function() {
                return 1 - (scrollTop) / 30;
            }
        });
    }
});
