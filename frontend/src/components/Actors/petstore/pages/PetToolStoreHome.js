import React from "react";
import {Link} from 'react-router-dom';
import '../css/PetToolStoreHome.css';

import PaidOrders from "../images/payment.png";
import Inquiries from "../images/inquiry.jpg";
import Inventory from "../images/inventory.png";

import Bathroom from "../images/bathroom.jpg";
import Grooming from "../images/DogGrooming.jpg";
import FurnitureCage from "../images/FurnitureCage.jpg";
import PetCage from "../images/PetCage.jpg";
import TractionBelt from "../images/TractionBelt.jpg";
import NavbarUsers from "../../../includes/NavbarUsers";


function PetToolStoreHome()
{
    return(
        <div>
            <NavbarUsers/>
            {/* Topic started */}
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Baw Baw Pets Paradise</h3>
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
                            <Link to="/petstore/PaidOrders" class="nav-link active">
                            <img src={PaidOrders} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Paid Orders</h6>
                                    <div className="underline"></div>
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            <Link to="/petstore/inquiries/ViewInquiry" class="nav-link active">
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
                            <Link to="/petstore/inventory/AddEquipmentStock" class="nav-link active">
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
                <div className="d-flex justify-content-center mb-4">
                    <Link to="/petstore/addNewEquipment" class="nav-link active">
                        <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button>
                    </Link>
                </div>
                <div className="row bg-success text-white"> 
                  
                    <div className="col-md-4 my-auto">
                   
                    </div>
                    <h3 className="text-center">Posted Advertisements</h3>
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
                <h5 className="main-heading text-center">Advertisements list</h5>
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
                            <input type="text" class="form-control" id="petsearchby-name" aria-describedby="petsearch" placeholder="search advertisements by advertisement id or title"></input>
                            
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
        {/* <label htmlFor="service">Prescription List</label> */}

        <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow">
                            
                            <div className="card-body">
                                <h6>Dog bath brush</h6>   
                                <div className="underline"></div>       
                            </div>
                            
                            <img src={Bathroom} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                <div className="form-group row ">
                                        <div className="col-md-7">
                                            <h4 id="price">Rs. 1630</h4>
                                        </div>
                                        <div className="col-md-5">
                                        <Link to="/petstore/advertisement/MoreDetails" class="nav-link active">
                                            <button type="button" id="view-btn" className="btn shadow w-100 ">See More</button>
                                        </Link>
                                        </div>
                                </div>
                                    {/* <h4 id="price">Rs. 1630</h4> */}
                                    <div className="mb-2 mt-2 ">
                                        <Link to="/petstore/EditAdvertisement" class="nav-link active">
                                            {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                            <button type="button" id="submit-btn" className="btn shadow w-100 ">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow">
                            <div className="card-body">
                                <h6>Dog grooming tools</h6>   
                                <div className="underline"></div>       
                            </div>
                            <img src={Grooming} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                <div className="form-group row ">
                                        <div className="col-md-7">
                                            <h4 id="price">Rs. 890</h4>
                                        </div>
                                        <div className="col-md-5">
                                        <Link to="/petstore/advertisement/MoreDetails" class="nav-link active">
                                            <button type="button" id="view-btn" className="btn shadow w-100 ">See More</button>
                                        </Link>
                                        </div>
                                </div>
                                {/* <h4 id="price">Rs. 890</h4> */}
                                    <div className="mb-2 mt-2 ">
                                        <Link to="/petstore/EditAdvertisement" class="nav-link active">
                                            {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                            <button type="button" id="submit-btn" className="btn shadow w-100 ">Edit</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card shadow">
                            <div className="card-body">
                                <h6>Furniture Cage</h6>   
                                <div className="underline"></div>       
                            </div>
                            <img src={FurnitureCage} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                <div className="form-group row ">
                                        <div className="col-md-7">
                                            <h4 id="price">Rs. 15200</h4>
                                        </div>
                                        <div className="col-md-5">
                                        <Link to="/petstore/advertisement/MoreDetails" class="nav-link active">
                                            <button type="button" id="view-btn" className="btn shadow w-100 ">See More</button>
                                        </Link>
                                        </div>
                                </div>
                                {/* <h4 id="price">Rs. 15200</h4> */}
                                    <div className="mb-2 mt-2 ">
                                        <Link to="/petstore/EditAdvertisement" class="nav-link active">
                                            {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                            <button type="button" id="submit-btn" className="btn shadow w-100 ">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <div className="card shadow">
                            <div className="card-body">
                                <h6>Dog bath brush</h6>   
                                <div className="underline"></div>       
                            </div>
                            <img src={PetCage} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-3">
                            <div className="card shadow">
                            <div className="card-body">
                                <h6>Traction Belt</h6>   
                                <div className="underline"></div>       
                            </div>
                            <img src={TractionBelt} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">

                                <div className="form-group row ">
                                        <div className="col-md-7">
                                            <h4 id="price">Rs. 780</h4>
                                        </div>
                                        <div className="col-md-5">
                                        <Link to="/petstore/advertisement/MoreDetails" class="nav-link active">
                                            <button type="button" id="view-btn" className="btn shadow w-100 ">See More</button>
                                        </Link>
                                        </div>
                                </div>


                                {/* <h4 id="price">Rs. 780</h4> */}
                                    <div className="mb-2 mt-2 ">
                                        <Link to="/petstore/EditAdvertisement" class="nav-link active">
                                            {/* <button type="button" id="post-add-btn" className="btn shadow w-100 ">Post a New Advertisement</button> */}
                                            <button type="button" id="submit-btn" className="btn shadow w-100 ">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <div className="card shadow">
                            <div className="card-body">
                                <h6>Dog bath brush</h6>   
                                <div className="underline"></div>       
                            </div>
                            <img src={Grooming} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                
            </section>

               

             
            </div>
           
          </div>
        
      </div>
     
      
      
        
                
               
                
            </div>
            
        </section>
        {/* Prescriptions ended */}

        </div>
    );
}

export default PetToolStoreHome;

