$('button').click(function(){
	$('body').css('backgroundColor','steelblue');
	$(this).css('backgroundColor','green');
});

$('input').keypress(function(event){// event is for capturing
	if(event.which === 13){	// check if user hit enter
		alert("You hit Enter!");
	}
});

$('button').on('dblclick', function(){
	alert("You double clicked the button");
});

$('h1').on('click',function(){
	$(this).css('color','purple');
});

$('button').on('mouseenter',function(){
	$('button').css('font-weight','bold');
});

$('button').on('mouseleave',function(){
	$('button').css('font-weight','normal');
});