import React from 'react';
import {Link} from 'react-router-dom';


import create from '../img/create.jpg';
import view from '../img/view1.jpg';
import delete1 from '../img/delete01.jpg';
import update from '../img/update01.jpg';
import '../css/DoctorHome.css';
import NavbarUsers from '../../../includes/NavbarUsers';
function DoctorHome() {
  return (

<div>
    <NavbarUsers />
<section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div class="admincard col-md-6">
                            <div className="card shadow" id='cardone'>
                            <Link to="Available"><img src={create} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>DOCTOR AVAILABILITY</h6>
                                    <div className="underline"></div>
                                    <p>Please update your Availability</p>
                                </div>
                            </div>
                        </div>

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <Link to="DoctorConsultation"><img src={delete1} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>VIEW CONSULTATIONS</h6>
                                    <div className="underline"></div>
                                    <p>View your Consultations</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <Link to="History"><img src={update} className="w-50  border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>VIEW PET HISTORY</h6>
                                    <div className="underline"></div>
                                    <p>Please view pet history details</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <Link to="Inbox"><img src={view} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>Doctor Chat</h6>
                                    <div className="underline"></div>
                                    <p>This is your chat option with customers</p>
                                </div>
                            </div>
                        </div>

                        {/* <div class="admincard col-md-6">
                       
                       <div className="card shadow" id='cardone'>
                       <Link to="Vaccination"><img src={update} className="w-50  border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                           <div className="card-body">
                               <h6>VIEW PET VACCINATION</h6>
                               <div className="underline"></div>
                               <p>Please view pet vaccination details</p>
                           </div>
                       </div>
                   </div> */}

                   <div class="admincard col-md-6">
                       
                       <div className="card shadow" id='cardone'>
                       <Link to="Prescription"><img src={update} className="w-50  border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                           <div className="card-body">
                               <h6>ONLINE PRESCRIPTION</h6>
                               <div className="underline"></div>
                               <p>Please view online prescription</p>
                           </div>
                       </div>
                   </div>

                        
                    </div>
                </div>
            </section>
</div>


  );
}

export default DoctorHome;
