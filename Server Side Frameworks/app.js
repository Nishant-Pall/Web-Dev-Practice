var express = require('express');
var app = express();


// "/" => "Hi there!"

app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/" => "Goodbye!"

app.get("/bye", function(req, res){
	res.send("Goodbye");
});

// "/" => "MEOW!"

app.get("/dog", function(req, res){
	res.send("MEOW!");
})

// Tell express to listen for requests(start server)

// app.listen(process.env.PORT,process.env.IP,function(){	
// });
// above code for C9 enviornment

// you have to restart the server everytime
// you add a new route
app.listen(3000, function(){
	console.log("serving on port 3000");
});