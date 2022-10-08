const {isEmpty}  = require('../utils/is_empty');
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');
const conn = require('../service/db_service');
const {CHECK_EMAIL,REGISTER_USER} = require('../query/SignUp');
const { SIGNUP_MODEL,SIGNIN_MODEL } = require('../model/SignUp');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const AppError = require('../utils/appError');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { Cookie } = require('express-session');
// const CLIENT_URL = "http://localhost:3000/";



// const MAILGUN_APIKEY = "ef0c7a47b01cf05dea0b7f9b056001fe-2bab6b06-863a116e";


// const mailgun = require("mailgun-js");
// const DOMAIN = 'sandbox71790a0c69e543b9a9ec80f65ec71669.mailgun.org';
// const mg = mailgun({apiKey: MAILGUN_APIKEY, domain: DOMAIN});


//mail sender details
// const transporter = nodemailer.createTransport({
//    service : 'gmail',
//    port: 465,
//    secure: true,
//    auth:{
//       user:'hpet497@gmail.com',
//       pass: 'ftzitfvyuqehqdbr'

//    },
//    tls:{
//       rejectUnauthorized: false
//    }


// })




exports.User_SignIn = (req, res, next)=>
{
  
   
   if( isEmpty( req.body )) return next(new AppError("form data not found ",400));

   try{
      console.log("GGS");
      const { error } = SIGNIN_MODEL.validate(req.body);
      if( error ) return next(new AppError(error.details[0].message,400)) ;
      conn.query(CHECK_EMAIL , [req.body.Email ], async(err, data, feilds) =>{
         if( err ) return next(new AppError(err,500)) ;
         if( !data.length ) return  next(new AppError("Email or Password Invalid!",401)) ;

         const isMatched = await bcrypt.compare(req.body.Password, data[0].Password);
         if(!isMatched) return  next(new AppError("Email or Password Invalid!",401)) ;

         const token = JWT.sign( {User_name: data[0].User_name, User_ID: data[0].User_ID,User_type: data[0].User_type}, "sandaruwang", {expiresIn: "20m"});
         
         

         res.status(202).cookie("auth-token",token, {
            sameSite: 'strict',
            path : "/",
            httpOnly : false,
            secure: true,
         }).send(token)

         

         // res.header("auth-token",token).status(200).send({
         //    data: "Welcome to PetHeaven! ",
         //    token: token,
         // })

         console.log(token);
           
      })
   }
   catch( err )
   {
      res.status(500).json({
         error: err
      })
   }

}




exports.User_SignUp = (req,res,next)=>{
   
    if( isEmpty( req.body )) return next(new AppError("form data not found ",400));
    // res.status(200).json({
    //     data: "Hi controller"
    // });

    try{
      
        const { error } = SIGNUP_MODEL.validate(req.body);

        if( error ) return next(new AppError(error.details[0].message,400)) ;
        console.log(req.body.type);
        conn.query(CHECK_EMAIL , [req.body.email], async(err, data, feilds) =>{
           if( err ) return next(new AppError(err,500)) ;
           if( data.length ) return  next(new AppError("Email already used!",400)) ;
            console.log(req.body.email);

         //   const JWT_ACC_ACTIVATE = accountactivatekey123;
         //   const token = jwt.sign([eq.body.name,req.body.email,req.body.rank],JWT_ACC_ACTIVATE,{expiresIn:'20m'})
           

            // const mail_data = {
            //    from: 'PetHeaven@hello.com',
            //    to: [req.body.email],
            //    subject: 'Account Activation Link',
            //    html:`
            //       <h2><b>Welcome to PetHeaven</b></h2>
            //       <h3>Please click on given link to activate your new PetHeaven Account</h3>
            //       <p>${CLIENT_URL/SignUp/activation/[req.body.email]/token}</p>
                  
            //    `
            // };
            // mg.messages().send(mail_data, function (error, body) {
            //    // console.log(body);
            //    if( err ) return next(new AppError(err,500));
  
            //   res.status(201).json({
            //      data: "User Registration Success!"
            //   })
            // });



           

            

           
           const salt = await bcrypt.genSalt(10);
           const hashedValue = await bcrypt.hash(req.body.pwd, salt);
           const email_token = crypto.randomBytes(64).toString('hex');
           const otp = Math.floor(10000 + Math.random() * 90000);
   


         var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hpet497@gmail.com',
              pass: 'ftzitfvyuqehqdbr'
            }
          });
          
          var mailOptions = {
            from: 'hpet497@gmail.com',
            to: req.body.email,
            subject: 'PetHeaven OTP Verification',
            html: `<html>
            <head>
              <style type="text/css">
                .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img {line-height: 100%;}#outlook a {padding: 0;}.ExternalClass,.ReadMsgBody {width: 100%;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0;mso-table-rspace: 0;}img {-ms-interpolation-mode: bicubic;border: 0;height: auto;outline: 0;text-decoration: none;}table {border-collapse: collapse !important;}#bodyCell,#bodyTable,body {height: 100% !important;margin: 0;padding: 0;font-family: ProximaNova, sans-serif;}#bodyCell {padding: 20px;}#bodyTable {width: 600px;}@font-face {font-family: ProximaNova;src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot);src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot?#iefix)format("embedded-opentype"),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.woff) format("woff");font-weight: 400;font-style: normal;}@font-face {font-family: ProximaNova;src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot);src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot?#iefix)format("embedded-opentype"),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.woff) format("woff");font-weight: 600;font-style: normal;}@media only screen and (max-width: 480px) {#bodyTable,body {width: 100% !important;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: none !important;}body {min-width: 100% !important;}#bodyTable {max-width: 600px !important;}#signIn {max-width: 280px !important;}}
              </style>
            </head>
            <body>
              <center>
                <table
                  style='width: 600px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 0;font-family: "ProximaNova", sans-serif;border-collapse: collapse !important;height: 100% !important;'
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  height="100%"
                  width="100%"
                  id="bodyTable"
                >
                  <tr>
                    <td
                      align="center"
                      valign="top"
                      id="bodyCell"
                      style='-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 20px;font-family: "ProximaNova", sans-serif;height: 100% !important;'
                    >
                      <div class="main">
                        <p
                          style="text-align: center;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%; margin-bottom: 30px;"
                        >
                          <img src="<a href="https://imgbb.com/"><img src="https://i.ibb.co/dksjt2H/Screenshot-690.png" alt="Screenshot-690" border="0"></a>
                            
                          
                        </p>
          
                        <h1>Welcome to <b>PetHeaven</b>!</h1>
          
                        <p>Thank you for signing up. This is our 5 digit otp code.</p>
          
                        <h2>`+ otp+`<h2>
                        
                        <p>In order to complete the sign-up process, please enter your OTP</p>
                                  
                        <br />
                        Thank You!
                        <br />
          
                        <strong>www.PetHeaven.lk</strong>
          
                        <br /><br />
                        
                        
                      </div>
                    </td>
                  </tr>
                </table>
              </center>
            </body>
          </html>`
          }
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info);
            }
          });
  

           conn.query(REGISTER_USER, [ [ hashedValue, req.body.email , req.body.user, req.body.type,  email_token, email_token, req.body.user,0 ]], (err,data,feilds)=>{
            if( err ) return next(new AppError(err,500));

            res.status(201).json({
               data: "User Registration Success!"
            })
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

{/* <a href="http://localhost:3000/SignUp/{$token}">CLICK TO ACTIVATE YOUR ACCOUNT</a>
                  <a href="' . CLIENT_URL . 'SignUp/activation' . '/' . {[req.body.email]} . '/' . {$token} . '">CLICK TO ACTIVATE YOUR ACCOUNT</a>'; */}