var express = require('express');
var app = express();


// "/" => "Hi there!"

app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"

app.get("/bye", function(req, res){
	res.send("Goodbye");
});

// "/dog" => "MEOW!"

app.get("/dog", function(req, res){
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	res.send("WELCOME TO A SUBREDDIT");
});

// * implies going to any route other than
// the three we defined above.
// If we move it above all other routes
// any route will print it because the order
// of routes changed
app.get("*", function(req, res){
	res.send("You are a star");
});

// Tell express to listen for requests(start server)

// app.listen(process.env.PORT,process.env.IP,function(){	
// });
// above code for C9 enviornment

// you have to restart the server everytime
// you add a new route

app.listen(3000, function(){
	console.log("serving on port 3000");
});