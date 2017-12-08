window.onload=function(){
	let hearig=document.getElementsByClassName('header-main-right')[0];
	let healis=hearig.getElementsByClassName('cc');
	let heazz=document.getElementsByClassName('heaZz');
	console.log(healis.length,heazz.length);
	for(let i=0;i<healis.length;i++){
		healis[i].onmouseover=function(){
			heazz[i].style.display='block';
			healis[i].className='cc bb';
		}
		healis[i].onmouseout=function(){
			heazz[i].style.display='none';
			healis[i].className='cc';
		}
	}
	let ban=document.getElementsByClassName('banner-pic')[0];
	let bans=ban.getElementsByTagName('li');
	let list=document.getElementsByClassName('bth-list')[0];
	let banback=document.querySelector('.bn-pic-bj');
	let bancolor=['#E8E8E8','#A4C5A6','#E8E8E8','#7E26DC','#FFEF01','#4C2EFE','#E9E7EA'];
	let lists=list.getElementsByTagName('li');
	console.log(banback);
	let t;
	let num=0;
	t=setInterval(fn,3000);
	ban.onmouseover=function(){
		clearInterval(t);
	}
	ban.onmouseout=function(){
		t=setInterval(fn,3000);
	}
	function fn(){
		num++;
		if(num==bans.length){
			num=0;
		}
		for(let j=0;j<bans.length;j++){
			bans[j].className='';
			lists[j].className='';
			banback.style.background='';
		}
		bans[num].className='ban';
		lists[num].className='btnli';
		banback.style.background=bancolor[num];
	}
	for(let i=0;i<lists.length;i++){
		lists[i].onmouseover=function(){
			bans[num].className='';
			lists[num].className='';
			banback.style.background=bancolor[i];
			bans[i].className='ban';
			lists[i].className='btnli';
			num=i;
		}
	}

	let banxxk=document.getElementsByClassName('banner-list')[0];
	let xxkli=banxxk.getElementsByTagName('li');
	let tmxxk=document.getElementsByClassName('tm-xxk');
	for(let i=0;i<xxkli.length;i++){
		xxkli[i].onmouseover=function(){
			tmxxk[i].style.display='block';
		}
		xxkli[i].onmouseout=function(){
			tmxxk[i].style.display='none';
		}
	}
	let chao=document.getElementsByClassName('chaoshi-main1-pic');
	let chtop=document.getElementsByClassName('chaoshi-mian-top');
	let cht;
	let chnum=0;
	cht=setInterval(chfn,3000);
	chtop.onmouseover=function(){
		clearInterval(t);
	}
	chtop.onmouseout=function(){
		cht=setInterval(chfn,3000);
	}
	function chfn(){
		chnum++;
		if(chnum==chao.length){
			chnum=0;
		}
		for(let i=0;i<chao.length;i++){
			chao[i].className="chaoshi-main1-pic";
			chtop[i].className='chaoshi-mian-top';
		}
		chao[chnum].className='chaoshi-main1-pic feng';
		chtop[chnum].className='chaoshi-mian-top top1';
	}



    // 返回
    let leftback=document.querySelector('.jddw-dingbu');
    leftback.onclick=function(){
        animate(document.body,{scrollTop:0},1000);
        animate(document.documentElement,{scrollTop:0},1000);
    }


    // 楼层跳转
	// top
    let jtop=document.querySelector('.jddw-top');
    let jheight=document.querySelector('.pinp-box').offsetTop;
    let boxli=document.querySelectorAll('.chaoshi-box');
    let jdleft=document.querySelector('.jddw-left');
    let navli=document.querySelectorAll('.jddw-left-main>a');
    console.log(navli.length);
    let navbg=['#64C333','#ff0036','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ff0036'];
    // console.log(navbg[1]);
    let curron=0;
    window.onscroll=function(){
        let obj=document.body.scrollTop?document.body:document.documentElement;
        if(obj.scrollTop>=jheight){
            console.log(obj.scrollTop);
            jtop.style.height=50+'px';
            jdleft.style.display='block';
        }else{
            jtop.style.height=0;
            jdleft.style.display='none';
        }
        boxli.forEach(function(val,index){
//            console.log(val.scrollTop);
            if(obj.scrollTop>=val.offsetTop-400){
                navli.forEach(function(val,index){
                    val.style.background='';
                })
                navli[index].style.background=navbg[index];
                curron=index;
            }
        })
    }
    navli.forEach(function(val,index){
        val.onclick=function(){
            console.log(boxli[index].offsetTop);
            animate(document.body,{scrollTop:boxli[index].offsetTop},1000);
            animate(document.documentElement,{scrollTop:boxli[index].offsetTop},1000);
            curron=index;
        }
        val.onmousemove=function(){
            val.style.background=navbg[index];
        }
        val.onmouseout=function(){
            if(index!=curron){
                val.style.background='';
            }
        }
    })

// 右定位


	// let kuang=document.getElementsByClassName('youshu1');
	// let chu=document.getElementsByClassName('jiaojiao');

	// console.log(kuang.length,chu.length);
	// for(let i=0;i<kuang.length;i++){
	// 	kuang[i].onmouseover=function(){
	// 		chu[i].style.display='block';
			
	// 	}
	// 	kuang[i].onmouseout=function(){
	// 		chu[i].style.display='none';
			
	// 	}
	// }
	// let erweim=document.getElementsByClassName('youshu1')[7];
	// let tmewm=document.getElementsByClassName('erweima');
	// erweim.onmouseover=function(){
	// 		tmewm.style.display='block';
			
	// 	}
	// 	erweim.onmouseout=function(){
	// 		tmewm.style.display='none';
			
	// 	}
/*
	// top
    let jtop=document.querySelector('.jddw-top');
    let jheight=document.querySelector('.pinp-box').offsetTop;
    // console.log(jdtop);
    window.onscroll=function(){
        let obj=document.body.scrollTop?document.body:document.documentElement;
       // console.log(obj.scrollTop);
        if(obj.scrollTop>=jheight){
            console.log(obj.scrollTop);
            jtop.style.height=50+'px';
        }else{
            jtop.style.height=0;
        }
    }
    console.log(jtop.offsetHeight);*/
}