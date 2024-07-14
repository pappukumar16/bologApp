const Like = require("../models/Like.models");
const Post = require("../models/Post.models")
exports.likepost = async(req,res)=>{
    try {

        const {post,user}= req.body;

        const likeskro = new Like({
            post, user
        });

        const savedLike = await likeskro.save();

        const updatedlikes = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                                                                  .populate("likes")
                                                                  .exec()
                                                                                                                                                                                                                                          
        
        return res.status(200).json({
        success:true,
        message:"Comment created successfully",
        data:updatedlikes
        }); 
                                                                                                                                                                                                                                          
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error",
            success:false,     
        })
    }
}

//unlike post
exports.unlikePost = async(req,res)=>{
    try {
        const {post,like} = req.body;

        

        const deletPost = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletPost._id}},{new:true})

        res.status(200).json({
            post:updatedPost
        });

    } catch (error) {
        
    }
}