$(function(){

	var $bottomTools = $('.bottom_tools');
	var $qrTools = $('.coin');
	var qrImg = $('.qr_img');
	var t = 0;
	
	$(window).scroll(function () {
		var scrollHeight = $(document).height();
		var scrollTop = $(window).scrollTop();
		var $windowHeight = $(window).innerHeight();
		var scrollIcon = $("#scrollUp");
		// scrollTop > 1.5*$windowHeight ? ($("#scrollUp").fadeIn(200).css("display","block"), a&&clearTimeout(a), a=setTimeout(function(){$("#scrollUp").style.display="none"},1000)) : $("#scrollUp").fadeOut(200);
		if (scrollTop > 1.5*$windowHeight)
		{
				scrollIcon.fadeIn(200).css("display","block");
				// t && clearTimeout(t);
				clearTimeout(t);
				t = setTimeout(function(){scrollIcon.fadeOut(600)},4000);
		} else {
			scrollIcon.fadeOut(200);
		}

		$bottomTools.css("bottom", scrollHeight - scrollTop > $windowHeight ? 40 : $windowHeight + scrollTop + 40 - scrollHeight);
	});
	
	$('#scrollUp').click(function (e) {
		e.preventDefault();
		$('html,body').animate({ scrollTop:0},1000);
	});
	
	$qrTools.hover(function () {
		qrImg.fadeIn();
	}, function(){
		 qrImg.fadeOut();
	});
	
});

