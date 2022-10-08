const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : '../backend/uploadedImges',
    filename: (req,file,cb)=>
    {
       cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
const upload = multer({
    storage : storage
  })

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//        cb(null, 'images');
//     },
//     filename: function (req, file, cb) {
//        console.log(file);
//        cb(null , file.originalname );
//     }
//  });

//  const upload = multer({ storage: storage })


const PetStoreRoute = express.Router();
const PetStore_controller = require('../controller/PetStore_controller');
PetStoreRoute.post("/addNewEquipment",upload.single('Image'),PetStore_controller.PostNewAdvertisement);



// const student_controller = require('../controllers/student_controller');

// AdminRoute.route("/")
//     .post( student_controller.student_register)
//     .get( student_controller.student_login)

// student_route.post("/", student_controller.student_register)
// student_route.get("/", student_controller.student_login)

module.exports = PetStoreRoute;