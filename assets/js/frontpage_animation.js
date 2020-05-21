fadein = false;

if ($("#videoblock").width() > 1000){
    $("#videoblock").css({"visibility":"hidden"});
    $("#videoblock").fadeTo(0, 0.0);
}
else{
    $("#videoblock").css({"visibility":"visible"});
    $("#videoblock").fadeTo(0, 1.0);
}


$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
    if ($("#videoblock").width() > 1000){
    $("#videoblock").css({"visibility":"hidden"});
    $("#videoblock").fadeTo(0, 0.0);
    }else{
        $("#videoblock").css({"visibility":"visible"});
        $("#videoblock").fadeTo(0, 1.0);
    }
});

big_func = function(){
    if ($("#videoblock").width() > 1000){
        if ($(window).scrollTop() > 60){
            if (!fadein){
                fadein = true;
                //alert("brother moment");
                $("#videoblock").css({"visibility":"visible"});
                $("#videoblock").fadeTo(70, 1.0);
            }
        }
        else{
            if (fadein){
                fadein = false;
                $("#videoblock").fadeTo(30, 0.0);
            }
        }
        $("#downarrow").css("opacity", 1 - ($(window).scrollTop() / 60));
    }else{
        fadein = true;
        $("#videoblock").fadeTo(1, 1.0);
        $("#downarrow").css("opacity", 0);
    }
}

$(window).scroll(function(){
    big_func();
});
$(window).resize(function(){
    big_func();
});

// Button Hover Animations
$("#btn_animated")

$("#brand_box").hover(
    function(){$("#da_logo").animate({height: "28px"}, 100);},        
    function(){$("#da_logo").animate({height: "26px"}, 80);}
);


$("#showcase_image").hover(
    function(){$("#showcase_image").animate({width: "103%"}, 50);},        
    function(){$("#showcase_image").animate({width: "100%"}, 200);}
);
$(".nav-item").hover(
    function(){$(this).css("text-decoration","underline");},        
    function(){$(this).css("text-decoration","none");}
);



