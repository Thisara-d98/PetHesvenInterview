const Joi = require('@hapi/joi');

exports.PETSTORE_MODEL = Joi.object({
   
    Title: Joi.string().required(),
    Price: Joi.number().required(),
    Image: Joi.string().required(),
    Description: Joi.required()
 
 })