
const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const conn = require('../service/db_service');
const {
   CHECK_EMAIL,
   REGISTER_PETADOPTER,
   ADOPT_REQUEST,
   FIND_APET,
   FIND_APET_BYTYPE,
   FIND_DOCTOR,
   FIND_PHARMACY,
   FIND_PETTOOLSTORE,
   APPOINT_DOCTOR,
   GET_TOOLSTORE,
   GET_TOOLSTOREITEM,
   GET_MEDICINE
} = require('../query/PetAdopter');
const { PETADOPTER_MODEL, PETADOPTER_ADOPTREQUESTMODEL, } = require('../model/PetAdopter');
// const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

exports.PetAdopter_adoptRequest=(req,res,next) => {
   
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   console.log("Sasinduwaa 111");
 //    const { error } = PETADOPTER_ADOPTREQUESTMODEL.validate(req.body);

 //    if ( error ) return next(new AppError(error.details[0].message,400));
   
   conn.query(ADOPT_REQUEST, [[ req.body.fullname,req.body.phonenumber,req.body.income,req.body.isanyPet,req.body.typeofPet,req.body.kidsinHome,req.body.additionalDetails]], (err,data,fields)=>{
      if(err) return next(new AppError(err,500));
         res.status(201).json({
            data:"Adopt request successfull!!"
         })
      })

   }

   catch( err ){
         res.status(500).json({
            error: err
         })
      }
}

exports.PetAdopter_Findapet=(req,res,next) => {
   if( isEmpty( req.data )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_APET,[req.body.type], (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}



exports.PetAdopter_Findapet_SearchPet=(req,res,next) => {
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_APET, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}



exports.PetAdopter_FindPharmacy=(req,res,next) => {
   console.log('___CHECKPOINT___');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PHARMACY, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_FindPettoolstore_=(req,res,next) => {
   console.log('___CHECKPOINT___');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PETTOOLSTORE, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }
}

exports.PetAdopter_FindDoctors=(req,res,next) => {
   console.log('Destination reached');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_DOCTOR, (err,result)=>{
            console.log("this is here");
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_Loadtoolitem=(req,res,next) => {
   console.log('_ __LOADED__ _');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
   try{
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(GET_TOOLSTOREITEM, (err,result)=>{
            console.log("__ CHECK HERE __");
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}

exports.PetAdopter_Loadpharmacymedicines_=(req,res,next) => {
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(GET_MEDICINE, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }
}

exports.PetAdopter_Loadpettoolstore_=(req,res,next) => {
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(GET_TOOLSTORE, (err,result)=>{
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }
}
exports.PetAdopter_makeappoint=(req,res,next) => {
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      console.log(req.body.fullname+" "+req.body.id);
      console.log("Sasinduwaa 111");
 //    const { error } = PETADOPTER_ADOPTREQUESTMODEL.validate(req.body);

 //    if ( error ) return next(new AppError(error.details[0].message,400));
   
   conn.query(APPOINT_DOCTOR, [[req.body.fullname,req.body.email,req.body.phonenumber,req.body.petname,req.body.symptoms,req.body.date,req.body.time,req.body.id]], (err,data,fields)=>{
      console.log(req.body.fullname+" "+req.body.id);
      
      if(err) return next(new AppError(err,500));
         res.status(201).json({
            data:"Appoint request successfull!!"
         })
      })

   }

   catch( err ){
         res.status(500).json({
            error: err
         })
      }
}


exports.PetAdopter_FindPharmacy=(req,res,next) => {
   console.log('Destination reached');
   // if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
   
      // if ( error ) return next(new AppError(error.details[0].message,400));
      conn.query(FIND_PHARMACY, (err,result)=>{
            console.log("this is here");
         res.send(result)
      })
   }
   catch(err)
   {
      console.log("___ error ___")
      res.status(500).json({
         error: err
      })
   }

}