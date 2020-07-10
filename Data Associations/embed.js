var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// POST- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var PostModel = mongoose.model("Post", postSchema)

// USER -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})

var User = mongoose.model("User", userSchema)



// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger",
// })

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "JK, Go to potions class to learn it"
// })

// newUser.save((err, user) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })

// var newPost = new PostModel({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// })

// newPost.save((err, post) => {
//     if (err) {
//         console.lof(err)
//     } else {
//         console.log(post);
//     }
// })

User.findOne({
    name: "Hermione Granger"
}, (err, user) => {
    if (err) {
        console.log(err)
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Vlodemort, Voldemort, Voldemort"
        })
        user.save((err, user) => {
            if (err) {
                console.log(err)
            } else {
                console.log(user)
            }
        })
    }
})