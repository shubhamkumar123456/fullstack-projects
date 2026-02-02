import PostCollection from "../models/postCollection.js";

const createPost = async(req, res)=>{
    const {title, file} = req.body
    let userId = req.user;

    try {
        let data = await PostCollection.create({
        title,
        file,
        userId
    })
    res.status(200).json({msg:"post created successfully"})
    } catch (error) {
        res.status(500).json({msg:"error in creating post", error:error.message})
    }

}

const deletePost = async(req, res)=>{
     res.send("delete post is running")
}

export {
    createPost,
    deletePost
}