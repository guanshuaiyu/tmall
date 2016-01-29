$(function(){
//-----------------顶部----------------- 
$('.mm').hover(function(){
	$(this).find('.yincang').show();
	$(this).find('.yibaiba').addClass('xxzz');
	// $(this).find('.yibaiba').animate({marginTop : '-2px'}, "slow");
},
function(){
	$(this).find('.yincang').hide();
	$(this).find('.yibaiba').removeClass('xxzz');
	// $(this).find('.yibaiba').animate({marginTop : '0px'}, 'slow');
})
// ------------侧栏--------------------------
$('.celan li').hover(function(){
	$('.celan li').removeClass('hongsede');
	var index = $('.celan li').index(this);
	$(this).find('.cang').show();
	$(this).find('.yifu').show();
	$(this).find('.arrow').show();
	$(this).addClass('hongsede');
	$(this).animate({paddingLeft:'10px'},100);
	$('.dadad').hide();
	$('.youda').hide();
	$('.youtu').animate({opacity:'0'},0);
	$('.zuotu').animate({height:'110%',width:'110%'},0);
	$('.youda'+(index+1)).show();
	$('.da'+(index+1)).show(0,function(){
		$(this).find('.youtu').animate({opacity:'1'},2000);
		$(this).find('.zuotu').animate({height:'100%',width:'100%'},2000);
	});
},function(){
	var index = $('.celan li').index(this);
	$(this).find('.cang').hide();
	$(this).find('.yifu').hide();
	$(this).find('.arrow').hide();
	$(this).animate({paddingLeft: '0px'},100);
})
// ---------------大轮播-------------
var index = 0;
  var lunbo  =  function(){
    $('.dadad1').hide();
    var el = $('.dadad1')[index];
    $(el).find('.youtu').animate({opacity:'0'},0);
	$(el).find('.zuotu').animate({height:'110%',width:'110%'},0);
    $(el).show(0,function(){
		$(this).find('.youtu').animate({opacity:'1'},2000);
		$(this).find('.zuotu').animate({height:'100%',width:'100%'},2000);
	});
    $('.xiaoyuan li').removeClass('xiaoyuan1');
    $($('.xiaoyuan li')[index]).addClass('xiaoyuan1');
    index += 1;
    if( index === $('.dadad1').length ){
      index = 0;
    }
  }
  $('.xiaoyuan li').each(function(i){
    $(this).data('index',i)
  });
  $('.xiaoyuan li').hover(function(){
    clearInterval(timerId);
    $('.xiaoyuan li').removeClass('xiaoyuan1');
    $(this).addClass('xiaoyuan1');
    var i = $(this).data('index');
    $('.dadad1').hide();
    $($('.dadad1')[i] ).find('.youtu').animate({opacity:'0'},0);
	$($('.dadad1')[i] ).find('.zuotu').animate({height:'110%',width:'110%'},0);
    $( $('.dadad1')[i] ).show(0,function(){
		$(this).find('.youtu').animate({opacity:'1'},2000);
		$(this).find('.zuotu').animate({height:'100%',width:'100%'},2000);
	});
    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,2000);
  });
  var timerId = setInterval(lunbo,2000);


//-------------所有鼠标经过动画------------
$('.left5').hover(function(){
	$(this).animate({left: '-5px'},400);
},function(){
	$(this).animate({left: '0px'},400);
})
$('.left3').hover(function(){
	$(this).find('img').animate({marginLeft: '-5px'},400);
},function(){
	$(this).find('img').animate({marginLeft: '0px'},400);
})
$('.left2 a').hover(function(){
	$(this).find('img').animate({marginLeft: '-5px'},400);
},function(){
	$(this).find('img').animate({marginLeft: '0px'},400);
})
$('.left4').hover(function(){
	$(this).animate({right: '210px'},300);
},function(){
	$(this).animate({right: '203px'},300);
})
//-----------a标签-----------------
var aa = document.getElementsByTagName('a');
for (var i = 0; i < aa.length; i++) {
	aa[i].onclick = function(e){
		e.preventDefault();//阻止跳转到顶部
		return false;//阻止跳转到其他页面
	}
};
$('.zk1').mousedown(function(e){
	e.preventDefault();
})
//------------左边栏经过------------
$('.zuobianl a').hover(function(){
	$(this).find('b').hide();
	$(this).find('em').css({visibility: 'initial'},'fast');
},function(){
	$(this).find('b').show();
	$(this).find('em').css({visibility: 'hidden'},'fast');
})
// ----------左边栏点击-----------------------
$('.zuobianl a').each(function(i){
    $(this).data('index',i);
});
$('.zuobianl a').click(function(){
    var i = $(this).data('index');
    var newtop = $( $('.er5-'+(i+1)) ).offset().top - 170;
    $({top: $(window).scrollTop()}).animate(
      	{top: newtop},
      	{
       		duration: 700,
			step: function() {
	 		 $(window).scrollTop(this.top);
			}
      	}
    );
});
// -----------返回顶部-----------------
$(".fanhui").click(function(){
    $({top: $(window).scrollTop()}).animate(
      	{top: 0},
      	{
        	duration: 700,
			step: function() {
	  			$(window).scrollTop(this.top);
			}
     	}
    );
});
// ---------上边框+左边栏+返回------------
var ti;
$(window).scroll(function(){
    if($(window).scrollTop() > 500){
		$('.fanhui').show(1000);
		$('.zuobianlan').show();
	}else{
		$('.fanhui').hide(1000);
      	$('.zuobianlan').hide();
	};
    	
    if($(window).scrollTop() > 768){
      	clearTimeout(ti);
     	ti = setTimeout(function(){
			$('#hei').show();
      	},500);
    }else{
      	clearTimeout(ti);
      	$('#hei').hide();
    };
});

// ----------右边栏--------------
$('.duoci').hover(
	function(){
	    $('.duoci').stop();
	    $(this).find('.youbianyin').show(0,function(){
	        $(this).animate({right:'35px'},200);
    	});
    },function(){
    	$('.duoci').stop();
    	$(this).find('.youbianyin').css({right:'70px'}).hide(0);
	}
);
//------------- 右边栏二维码----------
$('.erweima').hover(
	function(){
		$('.duoci').stop();
		$('.erweim').show(0);
		$('.xiaosanjiao1').show(0);
	},function(){
		$('.duoci').stop();
		$('.erweim').hide(0);
		$('.xiaosanjiao1').hide(0);
	}
);

// ---------------热门品牌---------------
var index1 =1;
$('.huanyipi').click(function(){
	var index = $('.huanyipi').index(this);
	$($('.sige')[index]).find('p').hide();
	$($($('.sige')[index]).find('p')[index1]).show(0);
	index1 +=1;
	if (index1==4) {index1=0;};
})
$('.zk1 li').click(function(){
	var index = $('.zk1 li').index(this);
	$('.zk1 li').removeClass('selected');
	$(this).addClass('selected');
	$('.zk2 li').hide();
	$($('.zk2 li')[index]).show(0);

})

// --------------小轮播-------------
var zuoxia = document.getElementsByClassName('zuoxia')[0];
var zuoxia1 = document.getElementsByClassName('zuoxia')[1];
var zuoxia2 = document.getElementsByClassName('zuoxia')[2];
var zuoxia3 = document.getElementsByClassName('zuoxia')[3];
var zuoxia4 = document.getElementsByClassName('zuoxia')[4];
var zuoxia5 = document.getElementsByClassName('zuoxia')[5];
var index2=0;
var xiaolunbo = function(){
	// index2 += 1;
	// if (index2==4) {index2=0;};
	// $('.zuoxia').animate({marginLeft:(-100)*index2},1000);
    index2++;
    if(index2==3){
        zuoxia.style.marginLeft = -index2* 100 + "px";
        zuoxia.addEventListener("webkitTransitionEnd",tr,false);
        zuoxia1.style.marginLeft = -index2* 100 + "px";
        zuoxia1.addEventListener("webkitTransitionEnd",tr1,false);
        zuoxia2.style.marginLeft = -index2* 100 + "px";
        zuoxia2.addEventListener("webkitTransitionEnd",tr2,false);
        zuoxia3.style.marginLeft = -index2* 100 + "px";
        zuoxia3.addEventListener("webkitTransitionEnd",tr3,false);
        zuoxia4.style.marginLeft = -index2* 100 + "px";
        zuoxia4.addEventListener("webkitTransitionEnd",tr4,false);
        zuoxia5.style.marginLeft = -index2* 100 + "px";
        zuoxia5.addEventListener("webkitTransitionEnd",tr5,false);
        index2=0;
    }else{
        zuoxia.removeEventListener("webkitTransitionEnd", tr,false);
        zuoxia.style.transition="margin  1s ease";
        zuoxia.style.marginLeft =-index2 * 100 + "px";
        zuoxia1.removeEventListener("webkitTransitionEnd", tr1,false);
        zuoxia1.style.transition="margin  1s ease";
        zuoxia1.style.marginLeft =-index2 * 100 + "px";
        zuoxia2.removeEventListener("webkitTransitionEnd", tr2,false);
        zuoxia2.style.transition="margin  1s ease";
        zuoxia2.style.marginLeft =-index2 * 100 + "px";
        zuoxia3.removeEventListener("webkitTransitionEnd", tr3,false);
        zuoxia3.style.transition="margin  1s ease";
        zuoxia3.style.marginLeft =-index2 * 100 + "px";
        zuoxia4.removeEventListener("webkitTransitionEnd", tr4,false);
        zuoxia4.style.transition="margin  1s ease";
        zuoxia4.style.marginLeft =-index2 * 100 + "px";
        zuoxia5.removeEventListener("webkitTransitionEnd", tr5,false);
        zuoxia5.style.transition="margin  1s ease";
        zuoxia5.style.marginLeft =-index2 * 100 + "px";
    }
}
function tr(){
    zuoxia.style.transition="none";
	zuoxia.style.marginLeft=0;
}
function tr1(){
    zuoxia1.style.transition="none";
	zuoxia1.style.marginLeft=0;
}
function tr2(){
    zuoxia2.style.transition="none";
	zuoxia2.style.marginLeft=0;
}
function tr3(){
    zuoxia3.style.transition="none";
	zuoxia3.style.marginLeft=0;
}
function tr4(){
    zuoxia4.style.transition="none";
	zuoxia4.style.marginLeft=0;
}
function tr5(){
    zuoxia5.style.transition="none";
	zuoxia5.style.marginLeft=0;
}

var time = setInterval(xiaolunbo,2000);
$('.gyou').click(function(){
	clearInterval(time);
	var index = $('.gyou').index(this);
	index2 += 1;
	if (index2==3) {index2=0;};
	$($('.zuoxia')[index]).animate({marginLeft:(-100)*index2},200);
	time = setInterval(xiaolunbo,2000);
})
$('.gzuo').click(function(){
	clearInterval(time);
	var index = $('.gzuo').index(this);
	index2 -= 1;
	if (index2==-1) {index2=2;};
	$($('.zuoxia')[index]).animate({marginLeft:(-100)*index2},200);
	time = setInterval(xiaolunbo,2000);
})
//-----------文本框----------
$('.heisousuo input').focus(function(){
	this.value='';
	$(this).css({color:'#000'});
})
$('.heisousuo input').blur(function(){
	this.value='搜索 天猫 商品/品牌/店铺';
	$(this).css({color:' rgb(102, 102, 102)'});
})

$('#mq').focus(function(){
		this.value='';
		$(this).css({color:'#000'});
})
$('#mq').blur(function(){
	this.value='施华洛世奇华丽入驻，璀璨好礼疯狂送';
		$(this).css({color:' rgb(102, 102, 102)'});

})

// var dict = [
// 	$($('.neibu-1')[0]).offset().top,
// 	$($('.neibu-1')[1]).offset().top,
// 	$($('.neibu-1')[2]).offset().top,
// 	$($('.neibu-1')[3]).offset().top,
// 	$($('.neibu-1')[4]).offset().top,
// 	$($('.neibu-1')[5]).offset().top,
// 	$($('.neibu-1')[6]).offset().top,
// 	$($('.neibu-1')[7]).offset().top,
// 	$($('.neibu-1')[8]).offset().top,
// 	$($('.neibu-1')[9]).offset().top,
// 	$($('.neibu-1')[10]).offset().top, 
// 	$($('.neibu-1')[11]).offset().top, 
// 	$($('.neibu-1')[11]).offset().top+452 
// ];
var dict =[];
$('.neibu-1').each(function(){
	dict.push($(this).offset().top);
})
dict.push(dict[dict.length-1]+452);

var index3=0;
$(window).scroll(function(){
	var aa =$($('.zuobianl a')[5]).offset().top;
	if (index3<12&&aa>dict[index3+1]){index3++;};
	if (index3<=12&&aa<dict[index3]){index3--;};
		if(aa>dict[index3]&&aa<dict[index3+1]){
			$('.zuobianl a').find('b').show();
			$('.zuobianl a').find('em').css({visibility:'hidden'},'fast');
			$($('.zuobianl a')[index3]).find('b').hide();
			$($('.zuobianl a')[index3]).find('em').css({visibility: 'initial'},'fast');
		}
	if (aa<dict[0]||aa>dict[11]+452){
		$('.zuobianl a').find('b').show();
		$('.zuobianl a').find('em').css({visibility:'hidden'},'fast');
	}
})














// $('.zuobianl a').each(function(i,el){
// 	$(this).data('index',1);
// 	console.log(arguments);
// })
// $('.zuobianl a').click(function(e){
// 	var i = $(this).data('index');
// 	var top = $($('.er5-'+(i+1))).offset().top-50;
// 	$({top:$(window).scrollTop}).animate({top:top},{
// 		duration:700,
// 		step:function(){
// 			$(window).scrollTop(top);
// 		}
// 	})
// })
// $('#mall').data('index',10);
// console.log($('#mall').data('index'));//把10取出


// $('#aa')
// $($('.aa')[0])
// $('<span>1</span>');
// $(function(){})
//代码中不要使用Tab和空格混排
// console.dir(aa[0].innerHTML);
// $(function(arg){
// 	if (typeOf arg=='function') {
// 		window.onload = arg;
// 	};
// })

// $({aa:10}).animate({aa:1000},{duration:700,step:function(){console.log(this.aa);}});
//变量初始值        最终得值    时间       每一步都调用一次            指的是aa        
// $(document).click(function(){
// 	$({aaa:1}).animate({aaa:100},{
// 		duration:1000,
// 		step:function(){
// 			$('#h1').css({marginLeft:this.aaa});
// 		}
// 	});
// })

})
