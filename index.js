/**
 * Created by Mai on 7/19/2014.
 */
$(document).ready(function(){
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 0) {

            $("#logowrap").fadeOut(500);
            $("ul#nav li a.para").stop().animate({height: 60}, "slow");
            $("#headerwrap").stop().animate({height: 70}, "slow");
            $("#headerbase").slideUp("slow");
            $("#logosmall").fadeIn(1000);


            /*$(".link").css("line-height","70");*/
            /*$("#headerwrap").fadeTo("slow",0.7);*/
        }
        else {
            $("#logowrap").fadeIn(500);
            $("#headerwrap").stop().animate({height:100},"slow");
            $("ul#nav li a.para").stop().animate({height: 90}, "slow");
            $("#headerbase").slideDown("slow");
            $("#logosmall").fadeOut(1000);
            /*$(".link").css("line-height","90");*/
            /*$("#headerwrap").stop().fadeTo("slow",1);*/
        }
    });
});
/*
$(document).ready(function() {
    $("#slide1").fadeIn(500);
    $("#slide1").delay(5500).hide("slide",{direction:"left"},500);

    var sc = $(".slider img").size();
    var count = 2;

    setInterval(function () {
        $("#slide" + count).show("slide", {direction:"right"},500);
        $("#slide" + count).delay(5500).hide("slide",{direction:"left"},500);

        if (count == sc) {
            count = 1;
        }
        else {
            count = count + 1;
        }
    }, 6500);
});
*/

var sliderint=1;
var slidernext =2;


$(document).ready(function(){
    $("#slide"+sliderint).fadeIn(500);
    startSlider();


function startSlider() {

    var count = $(".slider img").size();

    loop = setInterval(function(){
        if (slidernext>count) {
            slidernext=1;
            sliderint=1;

        }
        $(".slide").hide("slide",{direction:"left"},500);
        $("#slide"+slidernext).delay(700).show("slide", {direction:"right"},500);

        sliderint=slidernext;
        slidernext=slidernext+1;

    },4000);
}

    /*$("#left").click(function() {
       var newSlide = sliderint-1;
        showSlide(newSlide);
    });*/

   $("#right").click(function() {
        var newSlide = sliderint+1;
        showSlide(newSlide);
    });
    $("#left").click(function() {
        var newSlide = sliderint-1;
        rightSlide(newSlide);
    });

    function stopLoop() {
        window.clearInterval(loop);
    }

    function showSlide(id) {
        stopLoop();
        var count = $(".slider img").size();
        if (id>count) {
            id=1;

        }
        else if (id<1) {
            id=count;

        }

        $(".slide").hide("slide",{direction:"left"},500);
        $("#slide"+id).delay(700).show("slide", {direction:"right"},500);

        sliderint=id;
        slidernext=id+1;
        startSlider();
    }
    function rightSlide(id) {
        stopLoop();
        var count = $(".slider img").size();
        if (id>count) {
            id=1;

        }
        else if (id<1) {
            id=count;

        }

        $(".slide").hide("slide",{direction:"right"},500);
        $("#slide"+id).delay(700).show("slide", {direction:"left"},500);

        sliderint=id;
        slidernext=id+1;
        startSlider();
    }

    $(".slider").hover(
        function() {
            stopLoop();
        },
        function() {
            startSlider();
        }
    );

    document.getElementById("footer").addEventListener("mouseover",lighton);

    function lighton() {
        var image = document.getElementById('tap');
        if (image.src.match("off")) {
            image.src = "img/bulbon.png";
        }
    }

    document.getElementById("footer").addEventListener("mouseout",lightoff);

    function lightoff() {
        var image = document.getElementById('tap');
        if (image.src.match("on")) {
            image.src = "img/bulboff.png"
        }
    }

    $("li#serviceslink a").hover(function(){
        $("ul.sub1").stop().slideDown("slow");

    },function(){
        $("ul.sub1").stop().slideUp("slow");

    });

    $("a#client1").hover(function(){
        $("img#screenshot").css("display","block");

    },function(){
        $("img#screenshot").css("display","none");

    });
});