const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    pic: String,
    companyPosition: String,
    postDescription: String,
    postImage: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;