import joi from "joi-oid"

const schema = joi.object({
    email: joi.string().email().alphanum().required(),
    password: joi.string().min(8).alphanum().required(),
    photo: joi.string(joi.link()).required()
})

export default schema;