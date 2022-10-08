import React from 'react';
import {Link} from 'react-router-dom';


import create from '../img/create.jpg';
import view from '../img/view1.jpg';
import delete1 from '../img/delete01.jpg';
import update from '../img/update01.jpg';
import '../css/AdminHome.css';
import NavbarUsers from '../../../includes/NavbarUsers';
function AdminHome() {
  return (

<div>
    <NavbarUsers/>
<section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div class="admincard col-md-6">
                            <div className="card shadow" id='cardone'>
                            <Link to="Create"><img src={create} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>CREATE ACCOUNTS</h6>
                                    <div className="underline"></div>
                                    <p>Create PetHeaven new user Accounts</p>
                                </div>
                            </div>
                        </div>

                        <div class="admincard col-md-6">
                    
                            <div className="card shadow" id='cardone'>
                            <Link to="Delete"><img src={delete1} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>GENERATE DONATION REPORTS</h6>
                                    <div className="underline"></div>
                                    <p>Delete PetHeaven user Accounts</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <Link to="Update"><img src={update} className="w-50  border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>UPDATE & DELETE ACCOUNTS</h6>
                                    <div className="underline"></div>
                                    <p>Update PetHeaven user Accounts</p>
                                </div>
                            </div>
                        </div>
                        

                        <div class="admincard col-md-6">
                       
                            <div className="card shadow" id='cardone'>
                            <Link to="View"><img src={view} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                                <div className="card-body">
                                    <h6>VIEW ACCOUNTS</h6>
                                    <div className="underline"></div>
                                    <p>View PetHeaven user Accounts</p>
                                </div>
                            </div>
                        </div>

                       
                        <div class="admincard col-md-6">
                       
                       <div className="card shadow" id='cardone'>
                       <Link to="complains"><img src={view} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                           <div className="card-body">
                               <h6>VIEW & FIX COMPLAINS</h6>
                               <div className="underline"></div>
                               <p>View PetHeaven user Accounts</p>
                           </div>
                       </div>
                   </div>


                   {/* <div class="admincard col-md-6">
                       
                       <div className="card shadow" id='cardone'>
                       <Link to="View"><img src={view} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/></Link>
                           <div className="card-body">
                               <h6>VIEW REPORTS</h6>
                               <div className="underline"></div>
                               <p>View PetHeaven user Accounts</p>
                           </div>
                       </div>
                   </div> */}

                        
                    </div>
                </div>
            </section>
</div>


  );
}

export default AdminHome;
