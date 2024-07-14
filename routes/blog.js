const express = require("express");

const router = express.Router()

const {createComment} = require("../controllers/comment.controllers");
const {createPost,getAllpost} = require("../controllers/post.controllers")
const {likepost, unlikePost} = require("../controllers/like.controllers")


router.post("/comment/create",createComment);
router.post("/post/create",createPost)
router.get("/allpost/found",getAllpost);
router.post("/likes/like",likepost)
router.post("/like/unlike",unlikePost)
module.exports = router;