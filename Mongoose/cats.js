const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app",{useNewUrlParser:true, useUnifiedTopology: true});


var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament:String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to DB

// var george = new Cat({
// 	name:"Norris",
// 	age:7,
// 	temperament:"Evil"
// });

// george.save((err, cat)=>{
// 	if(err){
// 		console.log("Something went wrong");
// 	} else{
// 		console.log("We just saved a cat to the db");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name:"Snow White",
	age:15,
	temperament:"Bland"
}, (err, cats)=>{
	if(err){
		console.log(err);
	} else{
		console.log(cats);
	}
});


// retrieve all cats from the DB

Cat.find({}, (err, cats)=>{
	if(err){
		console.log("OH NO ERROR!");
		console.log(err);
	} else{
		console.log("All the Cats...")
		console.log(cats)
	}
});