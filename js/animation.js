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


var knapp = $("#menyknapp");
var meny = $("#sidomeny");
var aktiv = false;

$(".foretag-1-knapp").click(function () {
    "use strict";
    newforetag = foretag1;
    if (currentog) {
        $(document).ready(function () {
            currentnew.fadeTo(500, 0, function () {
                $(".topp").css('display', 'none');
                newforetag.fadeTo(500, 1);
                border.css('border-left-color', '#63C5E6');
                pil.css('backgroundColor', '#63C5E6');
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
                border.css('border-left-color', '#63C5E6');
                pil.css('backgroundColor', '#63C5E6');
                meny.animate({right: '-315px'});
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
                border.css('border-left-color', '#F02E2E');
                pil.css('backgroundColor', '#F02E2E');
            });
            currentnew = foretag2;
            currentog = false;
        });
    } else { /* (newforetag !== currentnew) */
        $(document).ready(function () {
            currentnew.fadeTo(500, 0, function () {
                foretag1.css('display', 'none');
                foretag3.css('display', 'none');
                foretag4.css('display', 'none');
                foretag5.css('display', 'none');
                newforetag.fadeTo(500, 1);
                border.css('border-left-color', '#F02E2E');
                pil.css('backgroundColor', '#F02E2E');
                meny.animate({right: '-315px'});
                aktiv = false;
            });
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
                border.css('border-left-color', '#4CED4F');
                pil.css('backgroundColor', '#4CED4F');
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
                border.css('border-left-color', '#4CED4F');
                pil.css('backgroundColor', '#4CED4F');
                meny.animate({right: '-315px'});
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
                border.css('border-left-color', '#C9C732');
                pil.css('backgroundColor', '#C9C732');
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
                border.css('border-left-color', '#C9C732');
                pil.css('backgroundColor', '#C9C732');
                meny.animate({right: '-315px'});
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
                border.css('border-left-color', '#CF7EC8');
                pil.css('backgroundColor', '#CF7EC8');
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
                border.css('border-left-color', '#CF7EC8');
                pil.css('backgroundColor', '#CF7EC8');
                meny.animate({right: '-315px'});
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
        knapp.click(function () {
            meny.animate({right: '0'});
            pil.animate({right: '315px'});
            aktiv = true;
        });
    } else {
        $(knapp).click(function () {
            meny.animate({right: '-315px'});
            aktiv = false;
        });
    }
});

/* slutar här */
