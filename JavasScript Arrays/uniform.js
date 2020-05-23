function isUniform(arr){
	var fixed = arr[0];
	for(var i = 1; i<arr.length;i++){
		if(arr[i]!==fixed)
			return false;
	}
	return true;
}

isUniform([1,1,1,2,1,1]);

isUniform(['a','a','a','a','a','a']);