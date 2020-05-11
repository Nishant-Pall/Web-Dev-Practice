function square(num) {
	console.log(num * num);
}


square(10);

var capitalize = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num){
	if(num % 2 == 0){
		return true;
	}
	return false;
}