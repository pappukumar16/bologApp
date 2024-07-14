const Post = require("../models/Post.models");

exports.createPost = async(req,res)=>{
    try {
        

        const {title,body} = req.body

        const post = new Post({
            title,body
        });

        const savePost = await post.save();

        

        return res.status(200).json({
            success:true,
            message:"Comment created successfully",
            data:savePost
        });



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error",
            success:false,     
        })
    }
}



//show all post 

exports.getAllpost = async(req,res)=>{
    try {

        //fetch all data
        const allposts = await Post.find().populate("likes").populate("comments").exec()

        return res.status(200).json({
            success:true,
            message:"Comment created successfully",
            data:allposts
        });



        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error",
            success:false,     
        })
            
    }
}