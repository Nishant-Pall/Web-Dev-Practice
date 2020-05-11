function square(num) {
	console.log(num * num);
}

var capitalize = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num){
	if(num % 2 == 0){
		return true;
	}
	return false;
}

function factorial(num){
	var result = 1;

	for(var i =2; i<=num; i++){
		result*=i;
	}
	return result;
}

function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_");
	return newStr;
}