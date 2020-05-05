var age = 0;
age = prompt("Enter your age");

if(age < 18){
	alert("Sorry, you are not old enough to enter the club");
}
else if(age < 21){
	alert("You can enter but cannot drink");
}
else{
	alert("You can enter and drink");
}