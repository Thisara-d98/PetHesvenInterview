console.log("backend called");
const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_USER, DELETE_USER} = require('../query/Admin');
const { SIGNUP_MODEL} = require('../model/Admin');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const CLIENT_URL = "http://localhost:3000/";


                 exports.View_Appointment = (req,res,next)=>{

                  var SelectQuery= "SELECT * FROM appointment WHERE accept=0";
 
                  
                   
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





                  exports.Consultation_accept = (req,res,next)=>{
                     const name = req.body.appointmentID;  

                     var consultation_Query=  `UPDATE appointment SET  message='${req.body.Message}',room_name='${req.body.roomname}',room_ID='${req.body.roomID}', accept=1 WHERE appointmentID ='${name}'`;
    
                     
                      
                            conn.query(consultation_Query, function (err,result){
                             if( err ) {
                              console.log(err);
                              res.send("Unable to get the comments");
                             }
                             else{
                              res.send(result);
                             }
                 
                            })
   
                      
                     }





                     exports.Inbox_Table = (req,res,next)=>{
                            var SelectQuery= "SELECT * FROM appointment WHERE accept=1 AND Done=0";
 
                  
                   
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
   


                            
                  
                  exports.Done = (req,res,next)=>{
                
                     const name = req.params.appointment_ID;
                     console.log(req.params)
                     const sqlDelete = `UPDATE appointment SET Done=1 WHERE appointmentID =${name}`;
                   
                     conn.query(sqlDelete, name, (err, result)=>{
                      if (err) {
                        console.log(err);}
                        else{
                           res.send("user delete");
                        }
                  
                 

               });
                 }




                     
                 exports.Available = (req,res,next)=>{
                
                     const name = req.params.appointment_ID;
                     console.log(req.params)
                     const sqlDelete = `UPDATE appointment SET Done=1 WHERE appointmentID =${name}`;
                   
                     conn.query(sqlDelete, name, (err, result)=>{
                      if (err) {
                        console.log(err);}
                        else{
                           res.send("user delete");
                        }
                  
                 

               });
                 }