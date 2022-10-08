const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {POST_PET, ADD_PET, UPDATE_MEDSTATUS, NOTIFY_ADOPTER } = require('../query/StaffMember');
const {STAFFMEMBERPOSTPET_MODEL, STAFFMEMBERADDPET_MODEL, STAFFMEMBERUPDATEMEDICAL_MODEL, STAFFMEMBERNOTIFYADOPTER_MODEL} = require('../model/Staffmember');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');


exports.Staffmemberpostpet=(req,res,next) => {

    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
 
    try{
      
      //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

      console.log('checkpoint');
      console.log(req.body.name)
      console.log(req.body.file);
      console.log(req.body.type);
      console.log(req.body.breed);
      //   if ( error ) return next(new AppError(error.details[0].message,400));
        conn.query(POST_PET, [[req.body.name,req.body.image,req.body.type,req.body.breed,req.body.color,req.body.gender,req.body.age,req.body.about,1,"2021.03.11"]], (err,data,fields)=>{
        if(err) return next(new AppError(err,500));
 
        res.status(201).json({
            data:"Pet post successfull!!"
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

 
exports.Staffmemberaddpet=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.file);
    console.log(req.body.type);
    console.log(req.body.breed);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(ADD_PET, [[req.body.name,req.body.image,req.body.type,req.body.breed,req.body.color,req.body.gender,req.body.age,req.body.about,1,req.body.receivedate]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Pet add successfull!!"
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


exports.Staffmemberupdatemedicalstatus=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.date);
    console.log(req.body.type);
    console.log(req.body.status);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(UPDATE_MEDSTATUS, [[req.body.name,req.body.date,req.body.type,req.body.status]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Update medical status successfully!!"
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


exports.Staffmembernotifyadopter=(req,res,next) => {

  if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

  try{
    
    //   const { error } = STAFFMEMBERPOSTPET_MODEL.validate(req.body);

    console.log('checkpoint');
    console.log(req.body.name)
    console.log(req.body.contact);
    console.log(req.body.message);
    console.log(req.body.status);
    //   if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(NOTIFY_ADOPTER, [[req.body.name,req.body.contact,req.body.message,req.body.status]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));

      res.status(201).json({
          data:"Notify adopter successfully!!"
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

exports.Staffmemberviewdonation = (req,res,next)=>{

  var SelectQuery= "SELECT * FROM dona";
   
         conn.query(SelectQuery, function (err,result){
          if( err ) {
           console.log(err);
           res.send("Unable to get the comments");
          }
          else{
           res.send(result);
          }
         })

   
  }
  
  exports.Staffmemberviewpets = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM pet WHERE status='stay'";
     
           conn.query(SelectQuery, function (err,result){
            if( err ) {
             console.log(err);
             res.send("Unable to get the comments");
            }
            else{
             res.send(result);
            }
           })
  
     
  }
  
  exports.Staffmemberviewposts = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM pet WHERE status='post'";
     
           conn.query(SelectQuery, function (err,result){
            if( err ) {
             console.log(err);
             res.send("Unable to get the comments");
            }
            else{
             res.send(result);
            }
           })
  
     
  }

  exports.Staffmemberviewadoptees = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM pet WHERE status='adopt'";
     
           conn.query(SelectQuery, function (err,result){
            if( err ) {
             console.log(err);
             res.send("Unable to get the comments");
            }
            else{
             res.send(result);
            }
           })  
  }

  exports.Staffmemberviewfeebacks = (req,res,next)=>{

    var SelectQuery= "SELECT * FROM adpnotification WHERE status='1'";
     
           conn.query(SelectQuery, function (err,result){
            if( err ) {
             console.log(err);
             res.send("Unable to get the comments");
            }
            else{
             res.send(result);
            }
           })  
  }