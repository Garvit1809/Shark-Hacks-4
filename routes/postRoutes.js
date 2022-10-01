const express = require("express");
const { getAllPosts, createPost } = require('../controllers/postController');
const router = express.Router();

router.get("/post", getAllPosts);
router.post("/post", createPost);

module.exports = router;