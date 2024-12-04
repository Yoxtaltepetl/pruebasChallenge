import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().required(),
    lastName: joi.string(),
    city:joi.string(),
    country:joi.string(),
    dateBorn:joi.string(),
    photo:joi.string(),
    photo: joi.string(joi.link()).required()
})

export default schema;