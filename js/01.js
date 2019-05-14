$(function(){
    
    $('.js-nav-menu-toggle, .menu-hide').on('click', function(){
   $(this).parents('.navigation-menu').toggleClass('navigation-menu-open');
 });
  /*/////////////////////메인메뉴///////////////////*/  
    
    var $header = $('header');
    $(window).scroll(function(){
        if($(this).scrollTop() >980){
           $header.addClass('sticky');
        }else{
             $header.removeClass('sticky');
         }
    });
    
    var $li = $('.sub_menu > a > li'); 
    
    $(window).scroll(function(){
        if($(this).scrollTop() >980){
           $li.addClass('sticky');
            
        }else{
             $li.removeClass('sticky');
         }
    });
    
    
    
    var ty=0
             var href="";                                   
             $('.sub_menu a li:eq(0) ').click(function(){
                 href = $('.sub_menu a li ').attr('#article_1');       
                 ty = $('#article_1').offset().top;           
                 $('html,body').animate({
                     scrollTop:ty              
                 },1500);
             })
    
    var ty=0
             var href="";                                   
             $('.sub_menu a li:eq(1) ').click(function(){
                 href = $('.sub_menu a li ').attr('#article_2');       
                 ty = $('#article_2').offset().top;           
                 $('html,body').animate({
                     scrollTop:ty              
                 },1500);
             })
    
    var ty=0
             var href="";                                   
             $('.sub_menu a li:eq(2) ').click(function(){
                 href = $('.sub_menu a li').attr('#article_3');       
                 ty = $('#article_3').offset().top;           
                 $('html,body').animate({
                     scrollTop:ty              
                 },1500);
             })
    
    
    /*
     $('.clearfix > ul > a > li').removeClass('active');
    
     $('.clearfix > ul > a > li').click(function(){
     $('.clearfix > ul > a > li').removeClass('active');
        $(this).eq(count).addClass('active');
         
    
    });*/
    
    
    
    /*///////////서브네비////////////////////////*/
    
    var count=0;
    
    $('.slider_img > li').eq(0).siblings().css('display','none');
    
    
    var timer=0;
    var delay=5000;
    
    timer=setInterval(make,delay);
    
    function make(){
        count++;
        if(count >=3){count=0;}
        banner();
    }
    
    function banner(){
        $('.slider_img > li').fadeOut(2000,function(){
            $('.slider_img > li').eq(count).fadeIn(5000);
        })
        
        $('.paging > li').removeClass("on");
        $('.paging > li').eq(count).addClass("on");
    }
    
    $('.paging > li').on('click',function(){
        count=$(this).index();
        banner();
        clearInterval(timer);
        timer = setInterval(make,delay);
    })
    
    /*슬라이더 이미지 */
    
    
    
             var ty=0
             var href="";                                   
             $('.arrow a').click(function(){
                 href = $('.arrow a').attr('href');           
                 ty = $(href).offset().top;           
                 $('html,body').animate({
                     scrollTop:ty              
                 },1500);
             })
    
    
                  /*패럴렉스*/
    
    $('.arrow > a > img').mouseover(function(){
        $(this).attr('src','images/arrow_2.png');
    })
     $('.arrow > a > img').mouseleave(function(){
        $(this).attr('src','images/arrow.png');
    })
    
    /*////////////////////화살표///////////////////////////////////*/
    
    
    $('.nav_1 > a > img').mouseover(function(){
        $(this).attr('src','images/history_2.png');
    })
    $('.nav_1 > a > img').mouseleave(function(){
        $(this).attr('src','images/history.png');
    })
    
    $('.nav_2 > a > img').mouseover(function(){
        $(this).attr('src','images/vision_2.png');
    })
    $('.nav_2 > a > img').mouseleave(function(){
        $(this).attr('src','images/vision.png');
    })
    
    $('.nav_3 > a > img').mouseover(function(){
        $(this).attr('src','images/news_2.png');
    })
    $('.nav_3 > a > img').mouseleave(function(){
        $(this).attr('src','images/news.png');
    })
    
    /*/////////////////nav///////////////////////////////*/
  
    
    var ty=0
    var href="";
    
     $('.nav_1 > a').click(function(){
     href = $('.nav_1 a').attr('href');           
     ty = $(href).offset().top;           
     $('html,body').animate({scrollTop:ty},1000);
        })
    $('.nav_2 > a').click(function(){
     href = $('.nav_2 a').attr('href');           
     ty = $(href).offset().top;           
     $('html,body').animate({scrollTop:ty},1300);
        })
    
    
    
    /*///////////////////////popup/////////////////////////////////////*/
    
    
    $('.popup_1').css('display','none');
    
    $('.fruit').eq(0).click(function(){
        $('.popup_1').css('left','200px').fadeIn(500);
    })
    
    $('.close1').click(function(){
        $('.popup_1').fadeOut(600);
     
        
    })
     
    
    
 /*-----------------------------------------------------------------*/   
    
    
    $('.popup_2').css('display','none');
    
    $('.fruit').eq(1).click(function(){
        $('.popup_2').css('left','800px').fadeIn(400);  
    })
    $('.close2').click(function(){
        $('.popup_2 ').fadeOut(600);
       
    })
    
    
    
    
    
    /*/////////////////////top///////////////////////////////*/
    
    var ty=0
    var href="";
    
     $('.top > p').click(function(){
     href = $('.top > p > a').attr('href');           
     ty = $(href).offset().top;           
     $('html,body').animate({scrollTop:ty},1000);
        })
    
    $('.top').hide();
    
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    });
    /*//////////////////vision///////////////////////////*/
    
    
 
    
    /*//////////////////////과일////////////////////////*/
  
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 2000){
                $('.banana_2').css('left','810px').css('margin-top','-8px');
                $('.blueberry_4').css('left','850px')/*.css('top','600px')*/;
                $('.lime_2').css('left','680px').css('margin-top','-40px');
                $('.grapefruit_2').css('left','820px');
                $('.blueberry_1').css('left','750px').css('margin-top','10px');
                $('.orange_1').css('left','750px').css('margin-top','10px');
                $('.cherry_1').css('left','820px').css('margin-top','-70px');
                $('.cherry_2').css('left','698px').css('margin-top','-80px');
                $('.grapefruit_1').css('left','660px').css('margin-top','-80px');
                $('.berry_1').css('left','800px').css('margin-top','20px');
                $('.blueberry_3').css('left','770px').css('margin-top','-100px');
                $('.kiwi_3').css('left','740px').css('margin-top','-200px');
                $('.orange_3').css('left','820px').css('margin-top','-80px');
                $('.kong_1').css('left','670px').css('margin-top','-150px');
                $('.lime_1').css('left','750px').css('margin-top','-180px');
                $('.cherry_3').css('left','700px').css('margin-top','-215px');
                $('.grapefruit_3').css('left','825px').css('margin-top','15px');
                $('.blueberry_2').css('left','760px').css('margin-top','55px');
                $('.berry_2').css('left','710px').css('margin-top','-250px');
                $('.kiwi_1').css('left','750px').css('margin-top','-260px');
                $('.mango').css('left','810px').css('margin-top','-140px');
                $('.orange_2').css('left','750px').css('margin-top','40px');
                $('.kiwi_2').css('left','800px').css('margin-top','160px');
                $('.abocado').css('left','825px').css('margin-top','-20px');
                $('.tomato_1').css('left','775px').css('margin-top','-80px');
                $('.banana_1').css('left','756px').css('margin-top','-80px');
               }
        });
    });
    
    /*//////////////////////////////////////////////////////////////////////////////*/
    
    
    
    $('.healthy > img').mouseover(function(){
        $(this).attr('src','images/healthy.png');
    })
     $('.healthy > img').mouseleave(function(){
        $(this).attr('src','images/healthy_2.png');
    })
    $('.active_2 > img').mouseover(function(){
        $(this).attr('src','images/active.png');
    })
     $('.active_2 > img').mouseleave(function(){
        $(this).attr('src','images/active_2.png');
    })
    
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 2000){
                $('.healthy').css('opacity','1').css('left','490px');               
               }
        })
    })
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 2000){
                $('.active_2').css('opacity','1').css('right','560px');               
               }
        })
    })
    
    /*///////////////////inspire gut/////////////////////////////////*/
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 2000){
                $('.inspire_2').css('opacity','1').css('bottom','340px');               
               }
        })
    })
  
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 2000){
                $('.gut').css('opacity','1').css('bottom','260px');               
               }
        })
    })
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 2000){
                $('.plus').css('opacity','1');              
               }
        })
    })
 /*/////////////////card_1/////////////////////////////*/
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 3000){
                $('.card_1').css('opacity','1').css('top','2500px');              
               }
        })
    })
    
    $('.details_1').css('opacity','0');
    
    $('.imgBox > img').mouseover(function(){
        $('.details_1').css('opacity','1');
    })
    
    $('.imgBox > img').mouseover(function(){
        $('.add').css('opacity','1');
    })

    
/*////////////////////////////////////////////////*/
    
   
    
    
    
    
    
    
    
    
    
  })/*end*/