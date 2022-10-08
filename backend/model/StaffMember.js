const Joi = require('@hapi/joi');
exports.STAFFMEMBERPOSTPET_MODEL = Joi.object({
    petID: Joi.number().integer(),
    Name:Joi.string().required(),
    type: Joi.string().required(),
    breed: Joi.string().required(),
    color: Joi.string().required(),
    gender:Joi.string().required(),
    age: Joi.string().required(),
    about: Joi.string().required(),
    status: Joi.number().integer().required(),
    receivedate: Joi.date().required(),
  
 })

 exports.STAFFMEMBERADDPET_MODEL = Joi.object({
    petID: Joi.number().integer(),
    Name:Joi.string().required(),
    type: Joi.string().required(),
    breed: Joi.string().required(),
    color: Joi.string().required(),
    gender:Joi.string().required(),
    age: Joi.string().required(),
    about: Joi.string().required(),
    status: Joi.number().integer().required(),
    receivedate: Joi.date().required(),
  
 })

 exports.STAFFMEMBERUPDATEMEDICAL_MODEL = Joi.object({
   medicalID: Joi.number().integer(),
   name:Joi.string().required(),
   date: Joi.date().required(),
   type: Joi.string().required(),
   status: Joi.string().required(),
})

exports.STAFFMEMBERNOTIFYADOPTER_MODEL = Joi.object({
   notificationID: Joi.number().integer(),
   name:Joi.string().required(),
   contact: Joi.string().required(),
   message: Joi.string().required(),
   status: Joi.number().required(),
})

