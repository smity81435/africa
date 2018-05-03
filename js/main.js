$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
        $('.text').css({
            'transform' : 'translate(0px , '+wScroll+'%)'
        });
        $('.foreele').css({
            'transform' : 'translate(0px , '+wScroll/5+'%)'
        });
        $('.backele').css({
            'transform' : 'translate(0px , '+wScroll/5+'%)'
        });
});
