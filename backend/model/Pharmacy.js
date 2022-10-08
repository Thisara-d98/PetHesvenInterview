const Joi = require('@hapi/joi');

exports.PHARMACY_MODEL = Joi.object({
   
    Medicine: Joi.string().required(),
    Quantity: Joi.number().required(),
    Price: Joi.number().required(),
    // MFD: Joi.required(),
    // Valid_period: Joi.required()
 
 })