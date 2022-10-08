import React from "react";
import './ViewInquiry.css';
import {Link} from 'react-router-dom';
import NavbarUsers from "../../../includes/NavbarUsers";

function ViewInquiry()
{
    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Inquiries</h3>
                </div>
            </div>
            </section>
            <div>
               
            </div>
            {/* <section className="section bg-c-light">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-left">
                                    <h6>
                                        Leave Us a Message
                                    </h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-success shadow w-100 ">Send</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p class="details">
                                    22 Palm Grove, Colombo 00300, Sri Lanka
                                    </p>
                                    <p class="details">+94 112 145 340</p>
                                    <p class="details">+94 112 145 341</p>
                                    <p class="details">info@petheaven.com</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}

<section className="section bg-c-light border-top">
                {/* <h3 class="pageTitle">Feedback  <i class="fa-solid fa-comments"></i></h3> */}
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div className="searchposts searchfeedback">
                                <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                                <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="container">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="fa-solid fa-user"></i><b>H.P.T.K. Kasthuriarachchi</b> 
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                How can I contact the owner of this chrity organization. Our organization happy to help your charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                        
                            <button type="button" class="btn btn-success replyBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply <i class="fa-solid fa-reply"></i></button>
                           
                        </div>
                    </div>    
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="fa-solid fa-user"></i><b>J.J.L.S. Adikari</b> 
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                How can I contact the owner of this chrity organization. Our organization happy to help your charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                                <button type="button" class="btn btn-success replyBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply <i class="fa-solid fa-reply"></i></button>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="fa-solid fa-user"></i><b>P.K.S.Samarasinghe</b> 
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            How can I contact the owner of this chrity organization. Our organization happy to help your charity organization. We are expect to donate and also we are hope to do another programs. Can I contact the Head of this charity organization.
                            </div>
                                <button type="button" class="btn btn-success replyBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply <i class="fa-solid fa-reply"></i></button>
                            </div>
                        </div>
                    </div>
              </div>
            </section>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6><i class="fa-solid fa-smile-beam"></i><b> Kindly Response Them..... </b></h6>
                                    <hr/> 
                                    <div className="form-group">
                                        <label className="mb-1 mt-1">Recipient</label>
                                        <input type="text" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="4" className="form-control" placeholder="Enter Your Message"></textarea>
                                    </div>                    
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Send  <i class="fa-solid fa-paper-plane"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>Discard <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>

        </div>
        
    );
}

export default ViewInquiry;