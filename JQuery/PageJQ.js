$(document).ready(function () {

    $("#btnDoAll").click(function () {

        //Hide - Show
        $("#verImg").toggle(2000);

        //Fade in - Fade out
        $("#table1").fadeToggle(3000);

         //Animation       
        $("p").animate({
            height: 'toggle'
        }, 3000);
        $(".img1").animate({
            opacity: '0.1'
        }, "slow");
        $(".img1").animate({
            opacity: '1'
        }, "slow");
    });
});