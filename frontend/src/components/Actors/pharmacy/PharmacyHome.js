import React from "react";
import {Link} from 'react-router-dom';
import './PharmacyHome.css';
// import {Link} from 'react-router-dom';

import PaidPrescriptions from "./images/pres.jpg";
import Inquiries from "./images/inquiry.jpg";
import Inventory from "./images/inventory.png";
import NavbarUsers from "../../includes/NavbarUsers";



function PharmacyHome()
{
    return(
        <div>
            <NavbarUsers/>
            {/* Topic started */}
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Aradhana Pharmacy</h3>
                </div>
            </div>
            </section>
            {/* Topic ended */}


            {/* 3 cards started */}
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow">
                            <Link to="/pharmacy/PaidPrescription" class="nav-link active">
                            <img src={PaidPrescriptions} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Paid Prescriptions</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <Link to="/pharmacy/inquiries/ViewInquiry" class="nav-link active">
                            <img src={Inquiries} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Inquiries</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <Link to="/pharmacy/inventory/AddStock" class="nav-link active">
                            <img src={Inventory} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Inventory</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 3 cards ended */}

            {/* New prescription topic started */}
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">New Prescriptions</h3>
                </div>
            </div>
            </section>
            {/* New prescription topic ended */}
           
           {/* Prescriptions Started */}
            <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">

                    {/* Check availability name started */}
                <h5 className="main-heading text-center">Check availability to confirm the order</h5>
                <div className="underline mx-auto"></div>
                {/* Check availability name ended */}
                
                {/* Search bar started here */}
                <div class="searchbar-div" >
                    <form>
                        <div className="form-group mt-3">
                        <div className="card mb-4 ">
                            <div className="card-body bg-c-light">
                            <div className="row ml-4">

                        {/* Search box started here         */}
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="petsearchby-name" aria-describedby="petsearch" placeholder="search prescriptions by prescription id or pet name"></input>
                            
                            </div>
                        {/* Search box ended here          */}

                        {/* Search button started here      */}
                            <div class="col-md-2">
                            <button type="submit" class="btn btn-success " id="petsearch-btn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        {/* Search box ended here      */}

                        </div>
                            </div>
                            
                        </div>
                        
                        
                        </div>
                    </form>
                </div>
                {/* Search bar ended here */}

                <div className="form-field">

                    {/* Prescription list started  */}
        <label htmlFor="service">Prescription List</label>

        {/* First prescription started */}
        <div className="form-group mt-3">
                <div className="card">
                <Link to="/pharmacy/Prescription" class="nav-link active">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">5</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">Doctor details</label>
                        <h4 className="main-heading">Dr. Amal Silva <sub>BVSc(Pera)</sub></h4>
                        <h6 class="slmc">Veterinary Consultant</h6>
                        <h6 class="slmc">SLMC - 13245</h6>
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Patient details</label> 
                        <h4 className="main-heading">Shaggy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">6 months</h6>
                    </div>
                </div>
                    </div>
                </Link>
                </div>
                    
                    
                </div>
                {/* First prescription ended */}

                {/* Second prescription started */}
                <div className="form-group mt-3">
                    <div className="card">
                        <div className="card-body bg-c-light">
                        <div className="row ">
                    <div class="col-md-2">
                        <label for="option" class="form-label">Prescription No</label>
                            <h4 className="main-heading">6</h4>
                        
                        </div>
                        <div class="col-md-5">
                            <label for="option" class="form-label">Doctor details</label>
                            <h4 className="main-heading">Dr. Priyantha Perera <sub>BVSc(Pera)</sub></h4>
                            <h6 class="slmc">Veterinary Consultant</h6>
                            <h6 class="slmc">SLMC - 54328</h6>
                        </div>
                        <div class="col-md-5">
                        <label for="option" class="form-label">Patient details</label> 
                            <h4 className="main-heading">Jerry</h4>
                            <h6 class="slmc">Cat</h6>
                            <h6 class="slmc">10 months</h6>
                        </div>
                    </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                {/* Second prescription ended */}

                {/* Third prescription started */}
                <div className="form-group mt-3">
                    <div className="card">
                        <div className="card-body bg-c-light">
                        <div className="row ">
                    <div class="col-md-2">
                        <label for="option" class="form-label">Prescription No</label>
                            <h4 className="main-heading">7</h4>
                        
                        </div>
                        <div class="col-md-5">
                            <label for="option" class="form-label">Doctor details</label>
                            <h4 className="main-heading">Dr. Amaya Fernando <sub>BVSc(London)</sub></h4>
                            <h6 class="slmc">Veterinary Consultant</h6>
                            <h6 class="slmc">SLMC - 43564</h6>
                        </div>
                        <div class="col-md-5">
                        <label for="option" class="form-label">Patient details</label> 
                            <h4 className="main-heading">Charlie</h4>
                            <h6 class="slmc">Dog</h6>
                            <h6 class="slmc">4 months</h6>
                        </div>
                    </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                {/* Third prescription ended  */}

                {/* Fourth prescription started  */}
                <div className="form-group mt-3">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-2">
                    <label for="option" class="form-label">Prescription No</label>
                        <h4 className="main-heading">8</h4>
                    
                    </div>
                    <div class="col-md-5">
                        <label for="option" class="form-label">Doctor details</label>
                        <h4 className="main-heading">Dr. Amal Silva <sub>BVSc(Pera)</sub></h4>
                        <h6 class="slmc">Veterinary Consultant</h6>
                        <h6 class="slmc">SLMC - 13245</h6>
                    </div>
                    <div class="col-md-5">
                    <label for="option" class="form-label">Patient details</label> 
                        <h4 className="main-heading">Jimmy</h4>
                        <h6 class="slmc">Dog</h6>
                        <h6 class="slmc">1 year</h6>
                    </div>
                </div>
                    </div>
                     
                </div>
                    
                    
                </div>
                {/* Fourth prescription ended  */}

                {/* Fifth prescription started  */}
                <div className="form-group mt-3">
                    <div className="card">
                        <div className="card-body bg-c-light">
                        <div className="row ">
                    <div class="col-md-2">
                        <label for="option" class="form-label">Prescription No</label>
                            <h4 className="main-heading">9</h4>
                        
                        </div>
                        <div class="col-md-5">
                            <label for="option" class="form-label">Doctor details</label>
                            <h4 className="main-heading">Dr. Jehan Perera <sub>BVSc(Pera)</sub></h4>
                            <h6 class="slmc">Veterinary Consultant</h6>
                            <h6 class="slmc">SLMC - 76984</h6>
                        </div>
                        <div class="col-md-5">
                        <label for="option" class="form-label">Patient details</label> 
                            <h4 className="main-heading">Lily</h4>
                            <h6 class="slmc">Cat</h6>
                            <h6 class="slmc">8 months</h6>
                        </div>
                    </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                {/* Fifth prescription ended  */}

               

             
            </div>
           
          </div>
        
      </div>
     
      
      
        
                
               
                
            </div>
            
        </section>
        {/* Prescriptions ended */}

        </div>
    );
}

export default PharmacyHome;