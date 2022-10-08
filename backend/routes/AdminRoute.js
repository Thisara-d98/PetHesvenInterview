const express = require('express');

const AdminRoute = express.Router();
const Admin_controller = require('../controller/Admin_controller');
AdminRoute.post("/Create",Admin_controller.Create_Accounts);
AdminRoute.post("/Delete/:user_id",Admin_controller.Delete_Accounts);
AdminRoute.get("/View",Admin_controller.View_Accounts);
AdminRoute.post("/Update",Admin_controller.Update_Accounts);
AdminRoute.get("/ComplainsView",Admin_controller.ComplainsView_Accounts);
AdminRoute.post("/FixError",Admin_controller.FixError);

// SignUpRoute.route("/")
//     .post( SignUp_controller.User_SignUp)
//     .get( SignUp_controller.User_SignIn)

// const student_controller = require('../controllers/student_controller');

// PetAdopterRoute.route("/")
//     .post( student_controller.student_register)
//     .get( student_controller.student_login)

// student_route.post("/", student_controller.student_register)
// student_route.get("/", student_controller.student_login)

module.exports = AdminRoute;