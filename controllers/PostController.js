import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
    try {
        const result = await Post.find()
        res.status(201).json({
            message: "success",
            data: result
        })
    } catch (err) {
        console.log(err);
    }
}

export const createPost = async (req, res) => {
    try {
        const postData = {
            title: req.body.title,
            description: req.body.description
        }
        const data = new Post(postData)
        const result = await data.save()
        res.status(201).json({
            message: "success",
            data: result
        })
    } catch (err) {

    }
}