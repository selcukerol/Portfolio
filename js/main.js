$(document).ready(function(){
	$('#circle').click(function(){
		$(this).toggleClass('resize')
		$('#square, #triangle').toggleClass('invisible')
		$('#skills').toggleClass('invisible')
	});
	$('#square').click(function(){
		$(this).toggleClass('resize')
		if ($('#square').is(".resize") == false){
		$('#circle, #triangle').toggleClass('invisible')
		}
		else{$('#circle, #triangle').addClass('invisible')}
		$('.square-text-wrapper').toggleClass('hidden')
	});
	$('#triangle').click(function(){
		$(this).toggleClass('resize-triangle')
		$('#square, #circle').toggleClass('invisible')
	});



});
