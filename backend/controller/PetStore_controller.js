const {isEmpty}  = require('../utils/is_empty');
// const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const { PETSTORE_MODEL } = require('../model/PetStore');
const {POST_NEW_EQUIPMENT} = require('../query/PetStore');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const multer = require('multer');
const path = require('path');



exports.PostNewAdvertisement=(req,res,next) => {
    console.log(req.file.filename)
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    const { error } = PETSTORE_MODEL.validate(req.body);
    if( error ) return next(new AppError(error.details[0].message,400)) ;
    console.log(req.body.Title);
 
    try{
    //  console.log("Sasinduwaa 111");
    var data = {
      Tool_ID: Tool_ID,
      Title: req.body.Title,
      Price : req.body.Price,
      Image: req.file.filename,
      Description: req.body.Description
    }
   console.log(req.body.Title);
      const Image =req.file.filename;
      // conn.query(POST_NEW_EQUIPMENT, [[ req.body.Title,req.body.Price,Image,req.body.Description]]
    conn.query(POST_NEW_EQUIPMENT, [[ req.body.Title,req.body.Price,Image,req.body.Description]], (err,data,fields)=>{
       if(err) return next(new AppError(err,500));
       console.log("Sasinduwaa 111");
       res.status(201).json({
          data:"Post new advertisement successfull!!"
       })
    })
 
    }
 
    catch( err )
      {
         res.status(500).json({
            error: err
         })
      }
 
 }



 