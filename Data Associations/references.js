var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/blog_demo_2", {
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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

var User = mongoose.model("User", userSchema)

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// })

// PostModel.create({
//     title: "How to cook the best burger pt. 3",
//     content: "afsksfdjbdfjb"
// }, ((err, post) => {
//     User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
//         if (err) {
//             console.log(err)
//         } else {
//             foundUser.posts.push(post)
//             foundUser.save((err, data) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             })
//         }
//     })
// }))

// Find User
// find all posts for that user
User.findOne({ email: "bob@gmail.com" }).populate("posts").exec((err, user) => {
    if (err) {
        console.log(err)
    } else {
        console.log(user)
    }
})