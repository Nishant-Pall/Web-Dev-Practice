const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose")

// APP CONFIG
mongoose.connect("mongodb://localhost/blog_app",{useNewUrlParser: true, useUnifiedTopology: true});
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

app.get("/",(req, res)=>{
	res.redirect("/blogs")
})

// INDEX ROUTE
app.get('/blogs',(req,res)=>{
	Blog.find({}, (err, blogs)=>{
		if(err){
			console.log(err)
		} else{
			res.render("index", {blogs:blogs})
		}
	})
})

// NEW ROUTE
app.get("/blogs/new", (req, res)=>{
	res.render("new");
})
// CREATE ROUTE
app.post('/blogs', (req, res)=>{
	// create blog
	Blog.create(req.body.blog, (err, newBlog)=>{
		if(err){
			res.render("new");
		} else{
			res.redirect("/blogs")
		}
	})
})

// SHOW ROUTE

app.get("/blogs/:id", (req, res)=>{
	Blog.findById(req.params.id, (err, foundBlog)=>{
		if(err){
			res.redirect("./blogs")
		} else {
			res.render("show",{blog: foundBlog})
		}
	})
})

app.listen(3000, ()=>{
	console.log("Server is running!!")
})