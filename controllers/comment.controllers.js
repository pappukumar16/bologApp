const Post = require("../models/Post.models");
const Comment = require("../models/Comment.models")

exports.createComment = async(req,res)=>{
    try {

        const {post,user,body} = req.body;

        const comment = new Comment({
              post, user, body
        });
    
        const saveComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
                                                         .populate("comments")
                                                         .exec()

        
                                                         
        return res.status(200).json({
            success:true,
            message:"Comment created successfully",
            post:updatedPost
        });



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error",
            success:false,     
        })
    }
}