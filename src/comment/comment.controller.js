import Comment from "./comment.model.js";


export const newComment = async(req, res) =>{
    const { name, title, description} = req.body;
    const comment = new Comment({name, title, description});

    await comment.save();

    res.status(200).json({
        comment,
    });
}