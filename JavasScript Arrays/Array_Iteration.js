var colors = ['red','yellow','green','blue'];

for(var i =0; i<colors.length;i++){
	console.log(colors[i]);
}

// forEach Loop

colors.forEach(function(color){
	console.log(color);
})

function printColor(color){
	console.log("***********");
	console.log(color);
	console.log("***********");
}

colors.forEach(printColor);