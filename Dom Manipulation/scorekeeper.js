var p1Button = document.querySelector('#p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var p1Score = 0;
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector("p span");
var reset = document.querySelector('#reset');
var numInput = document.querySelector("input");

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("Winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("Winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	resetscore();
});
function resetscore(){
	p1Display.textContent = 0;
	p1Score = 0;
	p1Display.classList.remove("Winner");
	p2Display.textContent = 0;
	p2Score = 0;
	p2Display.classList.remove("Winner");
	gameOver = false;
}
numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetscore();
})