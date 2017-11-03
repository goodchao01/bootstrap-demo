$(function(){

	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	
	$(window).scroll(function () {
		var scrollHeight = $(document).height();
		var scrollTop = $(window).scrollTop();
		var $windowHeight = $(window).innerHeight();
		var indexImageAomi = $('#indexImageAomi');
		var indexImageBox = $('#indexImageBox');
		var indexImageWWW = $('#indexImageWWW');
		// var scrollIcon = $("#scrollUp");
		// scrollTop > 1.5*$windowHeight ? ($("#scrollUp").fadeIn(200).css("display","block"), a&&clearTimeout(a), a=setTimeout(function(){$("#scrollUp").style.display="none"},1000)) : $("#scrollUp").fadeOut(200);
		//var y = 1400 + "px";
		if (scrollTop >= 2.5*$windowHeight && scrollTop <= 2.65*$windowHeight)
		{
			indexImageAomi.attr("class","Aomi2");
			 //t && clearTimeout(t);
			clearTimeout(t1);
			t1 = setTimeout(function(){indexImageAomi.attr("class","Aomi1")},1100);
		} else if (scrollTop < 2.5*$windowHeight) {
			indexImageAomi.attr("class","Aomi1");
		}

		if (scrollTop >=1.4*$windowHeight && scrollTop <= 1.5*$windowHeight ) 
		{
			indexImageBox.attr("class","holo2");
			clearTimeout(t2);
			t2 = setTimeout(function(){indexImageBox.attr("class","holo1")},1600);
		} else if (scrollTop < 1.5*$windowHeight) {
			indexImageBox.attr("class","holo1");
		}

		if (scrollTop >= 0.3*$windowHeight && scrollTop <= 0.45*$windowHeight ) 
		{
			indexImageWWW.attr("class","wwwImage2");
			clearTimeout(t3);
			t3 = setTimeout(function(){indexImageWWW.attr("class","wwwImage1")},2900);
		} else if (scrollTop < 0.3*$windowHeight) {
			indexImageWWW.attr("class","wwwImage1");
		}

		// $bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 40 : $windowHeight + scrollTop + 40 - scrollHeight);
	});
	
	// $('#scrollUp').click(function (e) {
	// 	e.preventDefault();
	// 	$('html,body').animate({ scrollTop:0},1000);
	// });
	
});


// 原生JavaScript获取css属性值
function getDefaultStyle(obj,attribute)
{
	return obj.currentStyle? obj.currentStyle[attribute]: document.defaultView.getComputedStyle(obj,false)[attribute];
}

window.onload=Main;
  //全局坐标变量
   
   //定位图片位置 
function GetMouse(e)
{	
	var indexImageBox = document.getElementById("indexImageBox");
	var imageName = getDefaultStyle(indexImageBox,"backgroundImage");
	if (imageName.match("jpg")) {
		var thisX_1 = document.getElementById("indexImageBox").offsetLeft;
		var thisX_2 = document.getElementById("container").offsetLeft;
		var thisX = thisX_1+thisX_2;
		var x = Math.abs(e.clientX - thisX);
		var f = Math.ceil(-x/(500/13))*500+"px";
		indexImageBox.style.backgroundPosition = f+" center";
	}
}
function GetMouse_2(e)
{
	var indexImageAomi = document.getElementById("indexImageAomi");
	var imageName = getDefaultStyle(indexImageAomi,"backgroundImage");
	if (imageName.match("png"))
	{
	  	var thisX_1 = document.getElementById("colRow").offsetLeft;
		var thisX_2 = document.getElementById("container").offsetLeft;
		var thisX = thisX_1+15;
		var x = Math.abs(e.clientX - thisX);
		var f = Math.ceil(-x/(500/10))*500+"px";
	    indexImageAomi.style.backgroundPosition = f+" center";
	}
}
//入口
function Main()
{
	var ele=document.getElementById("indexImageBox");
	var indexImageAomi = document.getElementById("indexImageAomi");
	//注册鼠标移动事件
	ele.onmousemove=function(event){GetMouse(event);};
	indexImageAomi.onmousemove=function(event){GetMouse_2(event);};
}



