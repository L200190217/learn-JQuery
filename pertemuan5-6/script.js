$(document).ready(function () {
    // untuk hiden
    $('#hide').click(function () {
        // $('#kotak').hide();
        $('#kotak').hide(1000);
    });
    // untuk show
    $('#show').click(function () {
        $('#kotak').show(2000);
    });



    // untuk fadeOut
    $('#fadeOut').click(function () {
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(3000);
    });

    // untuk fadeIn
    $('#fadeIn').click(function () {
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });

    // untuk Toggle(gabungan fadeOut & fadeIn)
    $('#fadeToggle').click(function () {
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    // untuk fadeTo
    $('#fadeTo').click(function () {
        $('.box1').fadeTo("slow",0);
        $('.box2').fadeTo("slow",0.3);
        $('.box3').fadeTo("slow",0.4);
    });

    //efek slideUp
    $('#slideUp').click(function () {
        $('#slide').slideUp("slow");
    });

    //efek slideDown
    $('#slideDown').click(function () {
        $('#slide').slideDown(1000);
    });

    //efek slideToggle
    $('#slideToggle').click(function () {
        $('#slide').slideToggle(2000);
    });


    // pertemuan 6

    // efek animate
    $('#kiri').click(function () {
        $('#animate-box').animate({'left': "-=50px"}, "slow");
    });
    $('#kanan').click(function () {
        $('#animate-box').animate({'right': "-=50px"}, "slow");
    });

    // efek clearQueue
    $('#start').click(function () {
        $('#clearQueue-Box').animate({left: "+=600px"}, 5000);
        $('#clearQueue-Box').queue(function () {
            
        });
    });

    $('#stop').click(function () {
        $('#clearQueue-Box').clearQueue();
        $('#clearQueue-Box').stop();
    });

    // efek delay
    $('#delay').click(function () {
        $('#kotak-satu').slideUp(2000).delay(3000).fadeIn(2000);
        $('#kotak-dua').slideUp(2000).fadeIn(2000);
    });
})