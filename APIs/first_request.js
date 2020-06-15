var request = require('request');

request('https://www.redditasd.com', function(error, response, body){
	if(!error && response.statusCode == 200){
		console.log(body); // show the html of google homepage
	} else if(error){
		console.log("something went wrong");
		console.log(error);
	}
});