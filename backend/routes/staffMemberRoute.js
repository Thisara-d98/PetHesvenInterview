const express = require('express');
const req = require('express/lib/request');

const staffMemberRoute = express.Router();
const StaffMember_controller = require('../controller/Staffmember_controller');

staffMemberRoute.post('/postpet',StaffMember_controller.Staffmemberpostpet);
staffMemberRoute.post('/addnewpet',StaffMember_controller.Staffmemberaddpet);
staffMemberRoute.post('/updatemedicalstatus',StaffMember_controller.Staffmemberupdatemedicalstatus);
staffMemberRoute.post('/notifyadopter',StaffMember_controller.Staffmembernotifyadopter);
staffMemberRoute.get('/viewdonation',StaffMember_controller.Staffmemberviewdonation);
staffMemberRoute.get('/viewpets',StaffMember_controller.Staffmemberviewpets);
staffMemberRoute.get('/viewposts',StaffMember_controller.Staffmemberviewposts);
staffMemberRoute.get('/viewadoptees',StaffMember_controller.Staffmemberviewadoptees);
staffMemberRoute.get('/viewfeedback',StaffMember_controller.Staffmemberviewfeebacks);

module.exports = staffMemberRoute;