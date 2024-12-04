import Comment from "../../models/Comment.js"

let deleteOne = async(req, res, next) => {
    try {
        let comment = req.body;
        let deleteComment = await Comment.deleteOne({_id: comment._id});
        return res.status(200).json({response: deleteComment});

    } catch (error) {
        next(error)
    }
}

export default deleteOne;