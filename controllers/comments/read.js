import Comment from "../../models/Comment.js";

let allComments = async(req, res, next) => {
    try {
        let all = await Comment.find();
        return res.status(200).json({comments:all})
    } catch (error) {
        next(error)
    }
}

let commentByManga = async(req, res, next) =>{
    try {
        let chapterId = req.params.id
        let commentsByChapter = await Comment.find({chapterId : chapterId})
        return res.status(200).json({response : commentsByChapter})
    } catch (error) {
        next(error)
    }
}

export {allComments, commentByManga}