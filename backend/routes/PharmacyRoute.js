const express = require('express');
const PharmacyRoute = express.Router();


const Pharmacy_controller = require('../controller/Pharmacy_controller');
PharmacyRoute.post('/inventory/AddStock',Pharmacy_controller.AddMedicine);

module.exports = PharmacyRoute;