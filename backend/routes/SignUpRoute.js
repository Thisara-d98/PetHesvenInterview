const express = require('express');

const SignUpRoute = express.Router();
const SignUp_controller = require('../controller/SignUp_controller');
SignUpRoute.post("/",SignUp_controller.User_SignUp);
SignUpRoute.post("/Authentication",SignUp_controller.User_SignIn);

// SignUpRoute.route("/")
//     .post( SignUp_controller.User_SignUp)
//     .get( SignUp_controller.User_SignIn)

// const student_controller = require('../controllers/student_controller');

// PetAdopterRoute.route("/")
//     .post( student_controller.student_register)
//     .get( student_controller.student_login)

// student_route.post("/", student_controller.student_register)
// student_route.get("/", student_controller.student_login)

module.exports = SignUpRoute;