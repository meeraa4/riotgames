jQuery(document).ready(function() {
    $(".main>li").mouseover(function() {
        $(this).find(".sub").stop().slideDown(500)
    }).mouseout(function() {
        $(this).find(".sub").stop().slideUp(500)
    });

    $(".gotop").click(function() {
        $("html").animate({scrollTop:0}, 700);
    });

});