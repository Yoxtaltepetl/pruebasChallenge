import Comment from "../../models/Comment.js";

let update = async (req, res, next) => {
    try {
        let comment = req.body
        let updateComment = await Comment.updateOne({_id:comment.id}, {message: comment.message})
        return res.status(200).json({response: updateComment});
    } catch (error) {
        next(error)
    }
}

export default update;