import bcryptjs from "bcryptjs";

export default (req, res, next) => {
    let passwordBody = req.body.password;
    let passwordDb = req.user.password;

    let compare = bcryptjs.compareSync(passwordBody, passwordDb)
    if(compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid"
    })
}