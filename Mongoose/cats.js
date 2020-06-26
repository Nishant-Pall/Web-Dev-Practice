const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament:String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to DB


// retrieve all cats from the DB