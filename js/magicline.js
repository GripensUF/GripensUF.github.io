/*global $ */

$(function() {

    var $el, leftPos, newWidth;
        $mainNav2 = $("#fancy-nav");
     
    /*
        EXAMPLE TWO
    */
    
    $mainNav2.append("<li class='magic-line-two'></li>");
    
    var $magicLineTwo = $(".magic-line-two");
    
    $magicLineTwo
        .width($(".current_page_item_two").width())
        .height($mainNav2.height())
        .css("left", $(".current_page_item_two a").position().left)
        .data("origLeft", $(".current_page_item_two a").position().left)
        .data("origWidth", $magicLineTwo.width())
        /* .data("origColor", $(".current_page_item_two a").attr("rel")); */
                
    $("#fancy-nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLineTwo.stop().animate({
            left: leftPos,
            width: newWidth,
            /* backgroundColor: $el.attr("rel") */
        })
    }, function() {
        $magicLineTwo.stop().animate({
            left: $magicLineTwo.data("origLeft"),
            width: $magicLineTwo.data("origWidth")
        });    
    });
    
    /* Kick IE into gear */
    $(".current_page_item_two a").mouseenter();
    
});