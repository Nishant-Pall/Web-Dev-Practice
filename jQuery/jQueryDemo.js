// When a user clicks the button with id 'trigger'
$('#trigger').click(function(){

	// change the body's background to yellow
	$('body').css('background','yellow');

});

$('h1').css('color','steelblue');

$('li').css('color','blue');

$('ui li a').css('color','red');

$('#adorable').css('border','2px solid red');

// we can also pass an object to change styles
var styles = {
	backgroundColor :'pink',
	fontWeight : 'bold'
};

$('#adorable').css(styles);

// in place objects

$('li').css({
	fontSize:'40px',
	border:'3px dashed purple'
});