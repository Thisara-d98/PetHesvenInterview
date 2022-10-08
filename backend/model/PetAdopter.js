// const Joi = require('@hapi/joi');

// exports.PETADOPTER_MODEL = Joi.object({
//     s_id: Joi.string(),
//     name: Joi.string().min(3).max(100).required(),
//     age: Joi.number().required(),
//     rank: Joi.number().integer().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required()
 
//  })

const Joi = require('@hapi/joi');

// exports.PETADOPTER_MODEL = Joi.object({
//     s_id: Joi.string(),
//     name: Joi.string().min(3).max(100).required(),
//     age: Joi.number().required(),
//     rank: Joi.number().integer().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required()
 
//  })


// exports.PETADOPTER_ADOPTREQUESTMODEL= Joi.object({
//     RequestID: Joi.string(),
//     fullname: Joi.string().required(),
//     phonenumber: Joi.string().required(),
//     income:Joi.number().integer().required(),
//     // isanyPet: Joi.number().integer().required(),
//     // typeofPet: Joi.string().required(),
//     // kidsinHome: Joi.number().integer().required(),
//     additionalDetails: Joi.string().required(),
//  })