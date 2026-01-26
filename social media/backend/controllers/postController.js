const createPost = async(req, res)=>{
    res.send("create post is running")
}

const deletePost = async(req, res)=>{
     res.send("delete post is running")
}

export {
    createPost,
    deletePost
}