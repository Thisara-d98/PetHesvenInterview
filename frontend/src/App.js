import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import jwt_decode from 'jwt-decode';
import io from "socket.io-client";

import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';
import Notifications from './components/pages/Notifications';
import Donate from './components/pages/Donate';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import OTP from './components/pages/otp';

import PharmacyHome from './components/Actors/pharmacy/PharmacyHome';
import PetToolStoreHome from './components/Actors/petstore/pages/PetToolStoreHome';

//Admin
// import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
// import AdminHome from './components/Actors/Admin/pages/AdminHome';
// import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
// import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
// import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
// import AdminView from './components/Actors/Admin/pages/AdminView';

import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
import AdminHome from './components/Actors/Admin/pages/AdminHome';
import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
import AdminView from './components/Actors/Admin/pages/AdminView';
import ViewComplains from './components/Actors/Admin/pages/ViewComplains';



//customer
import CustomerFindpet from './components/Actors/customer/pages/CustomerFindpet';
import CustomerDoctorappoint from './components/Actors/customer/pages/CustomerDoctorappoint';
import CustomerPharmacy from './components/Actors/customer/pages/CustomerPharmacy';
import CustomerPettoolstore from './components/Actors/customer/pages/CustomerPettoolstore';
import ProfilePage from './components/Actors/customer/pages/ProfilePage';
import CustomerAdoptRequest from './components/Actors/customer/pages/CustomerAdoptrequest';
import CustomerEditProfile from './components/Actors/customer/pages/CustomerEditprofile';
import CustomerChangePassword from './components/Actors/customer/pages/CustomerChangepassword';
import CustomerDoctormessages from './components/Actors/customer/pages/CustomerDoctormessages';
import Customerpharmacypage from './components/Actors/customer/pages/CustomerPharmacypage';
import Customerpettoolstorepage from './components/Actors/customer/pages/CustomerPettoolstorepage';
import Customerviewpetdetails from './components/Actors/customer/pages/CustomerViewpetdetails';
import CustomerRequestappoint from './components/Actors/customer/pages/CustomerRequestappoint';
import DoctorCalender from './components/Actors/customer/pages/DoctorCalender';
import CustomerBuymedicine from './components/Actors/customer/pages/CustomerBuymedicine';
import CustomerBuypettool from './components/Actors/customer/pages/CustomerBuypettool';
import CustomerInbox from './components/Actors/customer/pages/DoctorInbox';
import CustomerChat from './components/Actors/customer/pages/Chat'

//Pharmacy
import Prescription from './components/Actors/pharmacy/Prescription';
import PaidPrescription from './components/Actors/pharmacy/PaidPrescription';
import FinalizeOrder from './components/Actors/pharmacy/FinalizeOrder';
import AddStock from './components/Actors/pharmacy/inventory/AddStock';
import ViewInventory from './components/Actors/pharmacy/inventory/ViewInventory';
import ViewInquiry from './components/Actors/pharmacy/inquiries/ViewInquiry';

// Pet Tool Store
import AddEquipmentStock from './components/Actors/petstore/inventory/AddEquipmentStock';
import PaidOrders from './components/Actors/petstore/pages/PaidOrders';
import ViewPetToolInventory from './components/Actors/petstore/inventory/ViewPetToolInventory';
import PostAdvertisement from './components/Actors/petstore/pages/PostAdvertisement';
import EditAdvertisement from './components/Actors/petstore/pages/EditAdvertisement';
import MoreDetails from './components/Actors/petstore/pages/MoreDetails';
import ViewInventryInquiry from './components/Actors/petstore/inquiries/ViewInquiry';

//Doctor
//Doctor
import DoctorHome from './components/Actors/doctor/pages/DoctorHome';
import DoctorViewPetHistory from './components/Actors/doctor/pages/DoctorViewPetHistory';
import DoctorInbox from './components/Actors/doctor/pages/DoctorInbox';
import DoctorPrescription from './components/Actors/doctor/pages/DoctorPrescription';
import DoctorPrescriptionUser from './components/Actors/doctor/pages/DoctorPrescriptionUser';
import DoctorConsultation from './components/Actors/doctor/pages/DoctorConsultation';
import DoctorAvailability from './components/Actors/doctor/pages/DoctorAvailability';




//Staff member
import Staff from './components/Actors/staff/pages/Staff';
import ViewPets from './components/Actors/staff/pages/ViewPets';
import PostPet from './components/Actors/staff/pages/PostPet';
import ViewPost from './components/Actors/staff/pages/ViewPost';
import ViewAdoptee from './components/Actors/staff/pages/ViewAdoptee';
import UpdateVaccination from './components/Actors/staff/pages/UpdateVaccination';
import NotifyAdopter from './components/Actors/staff/pages/NotifyAdopter';
import ViewDonation from './components/Actors/staff/pages/ViewDonation';
import ViewFeedback from './components/Actors/staff/pages/ViewFeedback';
import AddNewPet from './components/Actors/staff/pages/AddNewPet';
import ViewAdopterRequests from './components/Actors/staff/pages/ViewAdopterRequests';




// function App() {
class App extends Component{

 render(){
  let sessionToken = sessionStorage.getItem("token");
  console.log("Appjs",sessionToken);
  // const {cookies} = this.props;
  
  // console.log(cookies.get('auth-token'));
  // const verify_token = cookies.get('auth-token');

  // if(verify_token)
  // {
  //   const users = jwt_decode(verify_token);

  //   window.loggedUserType = users.type;
  //   window.loggedUserId = users.id;
  // }
  // else
  // {
  //   window.loggedUserType = null;
  //   window.loggedUserId = null;
  // }

  return (

 //Homepage
  <Router>

      <div>
        {/* <Navbar/> */}

        <Routes>
      
            <Route exact path='/' element={<HomePage/>} />    
            <Route exact path='/about' element={<AboutUs/>} />  
            <Route exact path='/contact' element={<ContactUs/>} /> 
            <Route exact path='/Notifications' element={<Notifications/>} /> 
            <Route exact path='/donation' element={<Donate/>} />
            <Route exact path='/pharmacy' element={<PharmacyHome/>} />
            <Route exact path='/PetToolStore' element={<PetToolStoreHome/>} />
            <Route exact path='/OTPverify' element={<OTP/>} />

            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/SignIn' element={<SignIn />} />
            
             {/* Admin  */}
            {/* <Route exact path='/AdminHome/Create' element={<AdminCreate />} /> 
            <Route exact path='/AdminHome/Delete' element={<AdminDelete />} />
            <Route exact path='/AdminHome/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome/View' element={<AdminView />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />   */}

            <Route exact path='/AdminHome/Create' element={<AdminCreate />} /> 
            <Route exact path='/AdminHome/Delete' element={<AdminDelete />} />
            <Route exact path='/AdminHome/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome/View' element={<AdminView />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />  
            <Route exact path='/AdminHome/complains' element={<ViewComplains />} />

            {/* Pharmacy */}
            <Route exact path='/pharmacy/Prescription' element={<Prescription />} />
            <Route exact path='/pharmacy/PaidPrescription' element={<PaidPrescription />} />
            <Route exact path='/pharmacy/FinalizeOrder' element={<FinalizeOrder />} />
            <Route exact path='/pharmacy/inventory/AddStock' element={<AddStock />} />
            <Route exact path='/pharmacy/inventory/ViewInventory' element={<ViewInventory />} />
            <Route exact path='/pharmacy/inquiries/ViewInquiry' element={<ViewInquiry />} />


            {/* Pet Tool Store */}
            <Route exact path='/petstore/inventory/AddEquipmentStock' element={<AddEquipmentStock/>} />
            <Route exact path='/petstore/inventory/ViewPetToolInventory' element={<ViewPetToolInventory />} />
            <Route exact path='/petstore/addNewEquipment' element={<PostAdvertisement />} />
            <Route exact path='/petstore/EditAdvertisement' element={<EditAdvertisement />} />
            <Route exact path='/petstore/advertisement/MoreDetails' element={<MoreDetails />} />
            <Route exact path='/petstore/inquiries/ViewInquiry' element={<ViewInventryInquiry />} />
            <Route exact path='/petstore/PaidOrders' element={<PaidOrders />} />
            
            
              {/*Customer */}
              <Route exact path='/petadopter/findpharmacy/pharmacystore' element={<Customerpharmacypage/>} />
              <Route exact path='/petadopter/findpettoolstore/petstore' element={<Customerpettoolstorepage/>} />
              <Route exact path='/petadopter/messages' element={<CustomerDoctormessages/>}/>
              <Route exact path='/petadopter' element ={<CustomerFindpet/>} />
              <Route exact path='/petadopter/channeldoctor' element={<CustomerDoctorappoint/>}/> 
              <Route exact path='/petadopter/findpharmacy' element ={<CustomerPharmacy/>}/>
              <Route exact path='/petadopter/findpettoolstore' element ={<CustomerPettoolstore/>}/>
              <Route exact path='/petadopter/myprofile' element={<ProfilePage/>}/>
              <Route exact path='/petadopter/viewpetdetails/adoptrequestform' element={<CustomerAdoptRequest/>}/>
              <Route exact path="/petadopter/viewpetdetails" element ={<Customerviewpetdetails />}/>
              <Route exact path='/petadopter/channeldoctor/requestappoint' element={<CustomerRequestappoint/>}/>
              <Route exact path='/petadopter/channeldoctor/requestappoint/calender' element={<DoctorCalender/>}/>
              <Route exact path='/petadopter/findpharmacy/pharmacystore/medicinedetails' element={<CustomerBuymedicine/>}/>
              <Route exact path='/petadopter/findpettoolstore/petstore/pettooldetails' element={<CustomerBuypettool/>}/>


            {/* Doctor   */}
           {/* Doctor   */}
           <Route exact path='/DoctorHome' element={<DoctorHome/>} />
           <Route exact path='/DoctorHome/History' element={<DoctorViewPetHistory/>} />
           <Route exact path='/DoctorHome/Inbox' element={<DoctorInbox/>} />
           <Route exact path='/DoctorHome/Prescription' element={<DoctorPrescription/>} />
           <Route exact path='/DoctorHome/Prescription/DoctorPrescriptionUser' element={<DoctorPrescriptionUser/>} />
           <Route exact path='/DoctorHome/available' element={<DoctorAvailability/>} />
           <Route exact path='/DoctorHome/DoctorConsultation' element={<DoctorConsultation/>} />



           {/* staff member */}
           <Route exact path='staffmember/' element ={<Staff/>} />
            <Route exact path='staffmember/viewpets' element ={<ViewPets/>} />
            <Route exact path='staffmember/postpets' element ={<PostPet/>} />
            <Route exact path='staffmember/viewpost' element ={<ViewPost/>} />
            <Route exact path='staffmember/viewadoptee' element ={<ViewAdoptee/>} />
            <Route exact path='staffmember/updatemedicalstatus' element ={<UpdateVaccination/>} />
            <Route exact path='staffmember/notifyadopter' element ={<NotifyAdopter/>} />
            <Route exact path='staffmember/viewdonation' element ={<ViewDonation/>} />
            <Route exact path='staffmember/viewfeedback' element ={<ViewFeedback/>} />
            <Route exact path='staffmember/viewpets/addnewpet' element ={<AddNewPet/>} />
            <Route exact path='staffmember/viewadoptee/viewadopterrequests' element ={<ViewAdopterRequests/>} />
            <Route exact path='staffmember/viewadoptee/notifyadopter' element ={<NotifyAdopter/>} />
            <Route exact path='staffmember/viewpets/postpets' element ={<PostPet/>} />
           
        
        </Routes>

        <Footer/>
        
      </div>
  </Router>

 // admin   









  
// customer






//Doctor




//Staff member



  
  )
 }
}
// export withCookies(App);
export default withCookies(App)
