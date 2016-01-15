/*global $ */

var foretag1 = $(".foretag-1");
var foretag2 = $(".foretag-2");
var foretag3 = $(".foretag-3");
var foretag4 = $(".foretag-4");
var foretag5 = $(".foretag-5");
var currentnew = $(".topp");
var currentog = true;
var newforetag;

var border = $(".inremeny");
var pil = $(".pil-form");
var pil2 = $("#pil");
var box = $(".magic-line-two");


var knapp = $("#menyknapp");
var meny = $("#sidomeny");
var aktiv = false;

$(function () {

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
        .data("origWidth", $magicLineTwo.width());
        /* .data("origColor", $(".current_page_item_two a").attr("rel")); */
                
    $("#fancy-nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLineTwo.stop().animate({
            left: leftPos,
            width: newWidth
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
$(document).ready(function () {
    $(".foretag-1-knapp").click(function () {
        "use strict";
        newforetag = foretag1;
        if (currentog) {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    $(".topp").css('display', 'none');
                    newforetag.fadeTo(500, 1);
                });
                currentnew = foretag1;
                currentog = false;
            });
        } else { /* (newforetag !== currentnew) */
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    foretag2.css('display', 'none');
                    foretag3.css('display', 'none');
                    foretag4.css('display', 'none');
                    foretag5.css('display', 'none');
                    newforetag.fadeTo(500, 1);
                    meny.animate({right: '-320px'});
                    aktiv = false;
                });
                currentnew = foretag1;
            });
        }
    });
    $(".foretag-2-knapp").click(function () {
        "use strict";
        newforetag = foretag2;
        if (currentog) {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    $(".topp").css('display', 'none');
                    newforetag.fadeTo(500, 1);
                });
                currentnew = foretag2;
                currentog = false;
            });
        } else {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    foretag1.css('display', 'none');
                    foretag3.css('display', 'none');
                    foretag4.css('display', 'none');
                    foretag5.css('display', 'none');
                    newforetag.fadeTo(500, 1);
                    meny.animate({right: '-320px'});
                    aktiv = false;
                });
                $mainNav2.append("<li class='magic-line-two'></li>");
                currentnew = foretag2;
            });
        }
    });
    $(".foretag-3-knapp").click(function () {
        "use strict";
        newforetag = foretag3;
        if (currentog) {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    $(".topp").css('display', 'none');
                    newforetag.fadeTo(500, 1);
                });
                currentnew = foretag3;
            });
        } else {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    foretag1.css('display', 'none');
                    foretag2.css('display', 'none');
                    foretag4.css('display', 'none');
                    foretag5.css('display', 'none');
                    newforetag.fadeTo(500, 1);
                    meny.animate({right: '-320px'});
                    aktiv = false;
                });
                currentnew = foretag3;
                currentog = false;
            });
        }
    });  /* börjar här */
    $(".foretag-4-knapp").click(function () {
        "use strict";
        newforetag = foretag4;
        if (currentog) {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    $(".topp").css('display', 'none');
                    newforetag.fadeTo(500, 1);
                });
                currentnew = foretag4;
            });
        } else {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    foretag1.css('display', 'none');
                    foretag2.css('display', 'none');
                    foretag3.css('display', 'none');
                    foretag5.css('display', 'none');
                    newforetag.fadeTo(500, 1);
                    meny.animate({right: '-320px'});
                    aktiv = false;
                });
                currentnew = foretag4;
                currentog = false;
            });
        }
    });

    $(".foretag-5-knapp").click(function () {
        "use strict";
        newforetag = foretag5;
        if (currentog) {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    $(".topp").css('display', 'none');
                    newforetag.fadeTo(500, 1);
                });
                currentnew = foretag5;
            });
        } else {
            $(document).ready(function () {
                currentnew.fadeTo(500, 0, function () {
                    foretag1.css('display', 'none');
                    foretag2.css('display', 'none');
                    foretag3.css('display', 'none');
                    foretag4.css('display', 'none');
                    newforetag.fadeTo(500, 1);
                    meny.animate({right: '-320px'});
                    aktiv = false;
                });
                currentnew = foretag5;
                currentog = false;
            });
        }
    });


    $(knapp).click(function () {
        "use strict";
        if (aktiv === false) {
                meny.animate({right: '0'});
                aktiv = true;
        } else if (aktiv === true) {
                meny.animate({right: '-320px'});
                aktiv = false;
        }
    });
});
    /* slutar här */
