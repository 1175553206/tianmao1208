$(function(){
    let healis=hearig.getElementsByClassName('cc');
    healis.hover(function(){
        $(this).addClass('bb').find('.heaZz').attr('style','display:block;');
    },function(){
        $(this).removeClass('bb').find('.heaZz').attr('style','display:none');
    })


    let bancolor=['#E8E8E8','#A4C5A6','#E8E8E8','#7E26DC','#FFEF01','#4C2EFE','#E9E7EA'];
    let t;
    let num=0;
    t=setInterval(fn,2000);
    $('.banback').hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(fn,2000);
    })
    function fn(){
        num++;
        if(num==$('.banner-pic li').length){
            num=0;
        }
        bancolor[num];
        $('.banner-pic li').css({opacity: "0", zIndex: "-1"})
        $('.bth-list li').css({backgroundColor: "#666"})

        $('.banner-pic li').eq(num).css({opacity: "1", zIndex: "0"})
        $('.bth-list li').eq(num).css({backgroundColor: "white"})
        $('.banback').css({background:bancolor[num]});
    }
    $('.bth-list li').on('mouseover',function(){
        $('.banner-pic li').css({opacity: "0", zIndex: "-1"})
        $('.bth-list li').css({backgroundColor: "#666"})
        var index = $('.bth-list li').index($(this))
        $('.banner-pic li').eq(index).css({opacity: "1", zIndex: "0"})
        $('.bth-list li').eq(index).css({backgroundColor: "white"})
        $('.banback').css({background:bancolor[index]});

        num=index;
    })

    $('.banner-list li').hover(function() {
        // console.log($('this').find('.tm-xxk'));
        $('.tm-xxk').eq($(this).index()).attr('style','display:block');
    }, function() {
        $('.tm-xxk').eq($(this).index()).attr('style','display:none');
    });



    let leftback=$('.jddw-dingbu');

    $(document).scrollTop();
    leftback.on('click',function(){
        $("html,body").animate({scrollTop:0}, 500);
    })



    // 楼层跳转
    // top
    let jtop=$('.jddw-top');
    let jheight=$('.pinp-box').outerHeight();
    // console.log(jheight);
    let boxli=$('.chaoshi-box');
    let jdleft=$('.jddw-left');
    let navli=$('.jddw-left-main>a');
    // console.log(navli.length);
    let navbg=['#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036'];
    // console.log(navbg[1]);
    let curron=0;
    window.onscroll=function(){
        let obj=$(document).scrollTop();
        // console.log(obj);
        if(obj>=jheight){
            // console.log(obj.scrollTop);
            /*jtop.style.height=50+'px';
            jdleft.style.display='block';*/
            jtop.css({height:'50px'})
            jdleft.css({display:'block'})
        }else{
            jtop.css({height:'0px'})
            jdleft.css({display:'none'})
        }
        navli.each(function(index){
            // console.log(index);
            if(obj>=boxli.eq(index).offset().top-400){
                navli.css({background:''});
                navli.eq(index).css({background:navbg[index]});
                curron=index;
            }
        })

        // })
    }

    console.log(boxli.eq(1).offset().top-400);
    navli.on('click',function(){
        // console.log(boxli.eq($(this).index()).offset().top);
        navli.css({background:''});
        navli.eq($(this).index()).css({background:navbg[$(this).index()]});
        $('html,body').animate({scrollTop:boxli.eq($(this).index()).offset().top},500);
        curron=$(this).index();
    })
    navli.hover(function(){
        navli.eq($(this).index()).css({background:navbg[$(this).index()]});
    },function(){
        if($(this).index()!=curron){
            // console.log(1);
            navli.eq($(this).index()).css({background:''});
        }
    })



})