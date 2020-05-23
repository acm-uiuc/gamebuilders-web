fadein = false;

start_func = function(){
   if ($("#videoblock").width() > 1000){
        $("#videoblock").css("opacity", 0);
       $("#downarrow").css("opacity", 1);
       fadein = false;
   }else{
        $("#videoblock").css("opacity", 1);
       $("#downarrow").css("opacity", 0);
       fadein = true;
   }
    $("#downarrow").css("transition", "opacity 0.6s");
    $("#videoblock").css("transition", "opacity 0.6s");
}

big_func = function(){
    if ($("#videoblock").width() > 1000){
        if ($(window).scrollTop() > 60){
            if (!fadein){
                fadein = true;
                $("#downarrow").css("opacity", 0);
                $("#videoblock").css("opacity", 1);
            }
        }
        else{
            if (fadein){
                fadein = false;
                $("#downarrow").css("opacity", 1);
                $("#videoblock").css("opacity", 0);
            }
        }
    }else{
        fadein = true;
        $("#downarrow").css("opacity", 0);
        $("#videoblock").css("opacity", 1);
    }
}
$(window).on('load', function() {
    start_func();
});
$(window).on('beforeunload', function() {
    $("#downarrow").css("transition", "opacity 0s");
    $("#videoblock").css("transition", "opacity 0s");
    $(window).scrollTop(0);
});



$(window).scroll(function(){
    big_func();
});
$(window).resize(function(){
    big_func();
});

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



