const Joi = require('@hapi/joi');

exports.SIGNUP_MODEL = Joi.object({
   //  User_ID: Joi.string(),
    type: Joi.string(),
    pwd: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    user: Joi.string().min(3).max(100).required(),
   //  User_type: Joi.string().required(),
   //  Email_verify:Joi.number().required(),
    // Email_verify_token: Joi.string().required(),
   //  Profole_picture: Joi.string(),
     
 })

 exports.SIGNIN_MODEL = Joi.object({
   Email: Joi.string().email().required(),
   Password: Joi.string().min(6).required()
 
 })
 