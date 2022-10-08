
exports.FIND_APET="SELECT * FROM pet";
// exports.FIND_APET_BYTYPE="SELECT * FROM pet where type=?";
exports.FIND_PHARMACY="SELECT * FROM pharmacy where type=?";
exports.ADOPT_REQUEST="INSERT INTO adoptrequests VALUES (NULL, ?)";
exports.FIND_DOCTOR="SELECT * FROM doctor";
exports.FIND_PHARMACY="SELECT * FROM pharmacy";
exports.FIND_PETTOOLSTORE="SELECT Toolstore_ID,name,number,Street,City FROM pettoolstore";
exports.APPOINT_DOCTOR="INSERT INTO appointment VALUES (NULL,?)";
exports.GET_TOOLSTORE="SELECT * FROM pettoolstore INNER JOIN petstore ON pettoolstore.Toolstore_ID = petstore.Toolstore_ID";
exports.GET_TOOLSTOREITEM="SELECT * FROM pettoolstore INNER JOIN petstore ON pettoolstore.Toolstore_ID = petstore.Toolstore_ID";
exports.GET_TOOLSTORE="SELECT * FROM pharmacy INNER JOIN petstore ON pettoolstore.Toolstore_ID = petstore.Toolstore_ID";
exports.GET_MEDICINE="SELECT * FROM pharmacy INNER JOIN medicinestore ON pharmacy.Pharmacy_ID =medicinestore.Pharmacy_ID";