// shuffle//
$ ('.feature-work ul li').on('clik', function (){
	$(this).addClass('active').siblings().romoveClass('active');
	if($(this).data('class')===all){
		$('.shuffle-imgs .col-md').css('opacity',1);
		
	}else{
		$('.shuffle-imgs .col-md').css('opacity','.08');
		$($(this).data('class')).parent().css('opacity',1);
	}
});
