var h1 = document.querySelector("h1");

h1.style.color = "yellow";
h1.style.border = "5px solid purple";

var p = document.querySelector("p");

p.classList.add("big");
// p.classList.toggle("big");

// textContent
var ul = document.querySelector("ul");

// Retrive the textContent:
// ul.textContent;

// ul.textContent = "blah blah blah"

// innerHTML
// p.innerHTML;

// ul.innerHTML = "Plants are awesome";

// Attributes

var link = document.querySelector("a");

link.setAttribute("href",'https://www.reddit.com');

link.textContent = "Link to reddit";

var button = document.querySelector("button");

button.addEventListener("click", function(){
	h1.style.background = "purple"
});

var lis = document.querySelectorAll("li");

for(var i =0; i<lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}