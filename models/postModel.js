const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    postDescription: String,
    postImage: String,
});

postSchema.pre(/^find/, function (next) {
    this.populate({
      path: "author",
      select: "name photo companyPosition",
    });
    next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;