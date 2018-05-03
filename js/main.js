
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
        $('#forty').css({
            'opacity' : '1'
        });
    }else{
        $('#forty').css({
            'opacity' : '0'
        });
    };
    if(page > 4.8 && page < 5.5){
        $('#eveningbanner').css({
            'background-attachment' : 'fixed'
        });
        $('#eveningbanner h2').css({
            'font-size' : '6em'
        });
        $('#blackbox').css({
            'background' : 'transparent'
        });
    }else{
        $('#blackbox').css({
            'background' : 'black'
        });

        $('#eveningbanner h2').css({
            'font-size' : '3em'
        });
    };
    if(page > 5.9 && page < 6.93){
        $('#devs').css({
            'position' : 'fixed'
        });
        $('#devs').css({
            'margin' : '0 auto'
        });
        $('#devs').css({
            'bottom' : '0'
        });
        $('#devs').css({
            'left' : '0'
        });
        $('#devs').css({
            'right' : '0'
        });
        $('#devs').css({
            'padding' : '0'
        });
        $('#titlefour').css({
            'transform' : 'translate(0px , '+page*5+'%)'
        });
        
    }else if(page > 6.93){
        $('#devs').css({
            'position' : 'relative'
        }); 
        $('#devs').css({
            'padding' : '0'
        });
        $('#devs').css({
            'padding-top' : '300vh'
        }); 
    }else if(page < 5.9){
        $('#devs').css({
            'position' : 'relative'
        });
        $('#devs').css({
            'padding' : '0'
        });
        $('#devs').css({
            'padding-top' : '100vh'
        });
    };
    if(page > 7.3 && page < 8.3){
        $('#nightbanner div').css({
            'opacity' : '1'
        });
    }else{
        $('#nightbanner div').css({
            'opacity' : '0'
        });
    };
});
