var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hi there! Welcome to my assignment');
});

app.get('/speak/:animalName', function(req, res){
	var sounds = {
		pig:"OINK",
		dog:"WOOF",
		cow:"MOO",
		cat:"I hate you human",
		goldfish:"..."
	}
	var animalName = req.params.animalName.toLowerCase();
	var sound = sounds[animalName];
	res.send('The '+ animalName + ' says ' + sound);
});

app.get('/repeat/:word/:n', function(req, res){
	var word = req.params.word;
	var n = Number(req.params.n);
	var result = "";
	for(var i=0; i < n; i++){
		result+= " " + word; 
	}
	res.send(result);
});

app.get('*', function(req, res){
	res.send('Sorry page not found, what are you doing with your life ?');
});

app.listen(3000, function(){
	console.log('Server running on 3000');
});