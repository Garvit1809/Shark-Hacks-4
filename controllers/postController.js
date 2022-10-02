const Post = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const postMessages = await Post.find()
        res.status(200).json({
            status : 'success',
            data: {
                postMessages
            }
        })

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

const createPost = async (req, res) => {
    const post = new Post(req.body);
    // console.log(post);
    try {
        await post.save();
        res.status(201).json({
            status: 'success',
            data: {
                post
            }
        })
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

module.exports = { getAllPosts, createPost };