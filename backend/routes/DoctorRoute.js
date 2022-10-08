const express = require('express');

const DoctorRoute = express.Router();
const Doctor_controller = require('../controller/Doctor_controller');
// DoctorRoute.post("/Create",Doctor_controller.Create_Accounts);
// DoctorRoute.post("/Delete/:user_id",Doctor_controller.Delete_Accounts);
DoctorRoute.get("/View_Appointment",Doctor_controller.View_Appointment);
DoctorRoute.post("/Consultation_accept",Doctor_controller.Consultation_accept);
DoctorRoute.get("/Inbox_Table",Doctor_controller.Inbox_Table);
DoctorRoute.post("/Done/:appointment_ID",Doctor_controller.Done);
DoctorRoute.post("/Available",Doctor_controller.Available);

module.exports = DoctorRoute;



