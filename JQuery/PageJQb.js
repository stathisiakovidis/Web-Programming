//Javascript file for ask1Page3b buttons utility
$(document).ready(function () {
    
    //Hide - Show
    $("#btnHideImg").click(function () {
        $("#verImg").hide(2000);
    });

    $("#btnShowImg").click(function () {
        $("#verImg").show("slow");
    });

    //Fade in - Fade out
    $("#btnFadeOutTable").click(function () {
        $("#table1").fadeOut("slow");
    });

    $("#btnFadeInTable").click(function () {
        $("#table1").fadeIn(3000);
    });

    //Animation 
    $("#btnAnimation").click(function () {
        $("p").animate({
            height: 'toggle'
        });

        $(".img1").animate({
            height: 'toggle'
        });
    });

});