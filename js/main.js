
$(window).scroll(function(){
    var wSize = $(window).height();

    var wScroll = $(this).scrollTop();
    
    var page=(wScroll / wSize);
    

    console.log(page);
        $('.text').css({
            'transform' : 'translate(0px , '+wScroll+'%)'
        });
        $('.foreele').css({
            'transform' : 'translate(0px , '+wScroll/5+'%)'
        });
        $('.backele').css({
            'transform' : 'translate(0px , '+wScroll/5+'%)'
        });

    if(page > .4 && page < 1.2){
        $('#morningbanner div').css({
            'opacity' : '1'
        });
    }else{
        $('#morningbanner div').css({
            'opacity' : '0'
        });
    };
    if(page > 2.6 && page < 3.6){
        $('#middaybanner div').css({
            'opacity' : '1'
        });
    }else{
        $('#middaybanner div').css({
            'opacity' : '0'
        });
    }; 
    if(page > 3 && page < 4){
        $('#hoopoe').css({
            'opacity' : '1'
        });
        $('#parrot').css({
            'opacity' : '1'
        });
        $('#hoopoe').css({
            'transform' : 'translate('+page*10+'% , '+page*10+'%)'
        });
        $('#parrot').css({
            'transform' : 'translate(-'+page+'% , -'+page+'%)'
        });
    }else{
        $('#hoopoe').css({
            'opacity' : '0'
        });
        $('#parrot').css({
            'opacity' : '0'
        });
    };
    if(page > 4.6 && page < 5.4){
        $('#eveningbanner div').css({
            'opacity' : '1'
        });
    }else{
        $('#eveningbanner div').css({
            'opacity' : '0'
        });
    };
    if(page > 4.8 && page < 5.7){
        $('#eveningbanner').css({
            'background' : 'url("../img/lagos.png")'
        });
        $('#eveningbanner h2').css({
            'color' : 'red'
        });
        $('#eveningbanner h2').css({
            'font-size' : '6em'
        });
    }else{
        $('#eveningbanner').css({
            'background' : 'black'
        }); 
        $('#eveningbanner h2').css({
            'color' : 'white'
        });
        $('#eveningbanner h2').css({
            'font-size' : '3em'
        });
    };
    if(page > 6.6 && page < 7.2){
        $('#nightbanner div').css({
            'opacity' : '1'
        });
    }else{
        $('#nightbanner div').css({
            'opacity' : '0'
        });
    };
});
