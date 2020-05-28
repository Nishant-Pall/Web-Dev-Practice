var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
// 	if(isPurple){
// 		document.body.style.background = "white";
// 	}
// 	else{
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });


button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});
// if it has .purple it will remove it, if it doesn't, 
// it will add it