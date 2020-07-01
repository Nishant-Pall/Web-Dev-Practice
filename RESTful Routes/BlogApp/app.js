const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose")

// APP CONFIG
mongoose.connect("mongodb://locahalhost/blog_app",{useNewUrlParser: true, useUnifiedTopology: true})
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type:Date, default: Date.now}
})
const Blog = mongoose.model("Blog", blogSchema)

// RESTFUL ROUTES




app.listen(3000, ()=>{
	console.log("Server is running!!")
})