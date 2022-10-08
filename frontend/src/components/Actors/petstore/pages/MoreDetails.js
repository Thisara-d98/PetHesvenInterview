import React from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/MoreDetails.css';
import Bathroom from "../images/bathroom.jpg";

function MoreDetails()
{
    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">More Details</h3>
                </div>
            </div>
        </section>
        {/* <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading">PetHeaven</h5>
                <div className="underline"></div>
                <p class="para">
                    PetHeaven is an online web based system to facilitate services for animals specially cats and dogs. 
                    This is system to facilitate services to the orphan animals, mainly cats and dogs, covering up all the functionalities related to them from pet adoption to doctor consultation.
                    Through our web application we gave a chance to adopt an animal with our adoption process
                    and keep updating on main activities associated with the adopted animal, such as
                    vaccination reminders, consultation reminders etc. Not only that, it helps communities
                    to purchase items according to the animal type including the medicine that they require
                    and pet equipment. There are several breeds of cats and dogs found in Sri Lanka and
                    each breed has a common disease with them. Through our application we update on
                    those diseases.
                </p>
                </div>
                </div>
            </div>
            
        </section> */}
        <section className="section bg-c-light border-bottom border-top">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                    <div className="row">
                    <div className="col-md-12 mb-5">
                    <h5 className="main-heading">Dog bath brush</h5>
                        <div className="underline mx-float"></div>
                    </div>
                    <div className="col-md-6 text-center">
                    <div className="card shadow">
                        <div className="card-body">
                        <img id ="image" src={Bathroom} className="w-100 border-bottom" alt="Services"/>
                        </div>
                    </div>
                    {/* <h6 className="main-heading">Our Vision</h6>
                    <p class="para">
                    Our vision is to create a web based system for facilitating services for animals,
                    mainly cats and dogs, around the island to perform the adoption process using one
                    platform. 
                    </p> */}
                </div>
                <div className="col-md-6 text-center border-start">
                    <p id="header" class="fw-bold">Dog Bath Brush - Soft Silicone Dog Shampoo Brush, Pet Grooming Bath Massage Brush Shampoo Dispenser, Dog Brush Dog Shower Pet Bath Brush, Long Short Haired Dogs and Bath for Cats (Lightblue)</p>
                    <p class="para text-start">
                    Brand  :	Cookfree
                    </p>
                    <p class="para text-start">
                    Hair Type :	All, Dry, Normal Material	Silicone
                    </p>
                    <p class="para text-start">
                    Material :	Silicone
                    </p>
                    <p class="para text-start">
                    Benefits : Quick refunds on orders under
                    </p>
                    <p class="para text-start" >
                    Color : Lightblue
                    </p>
                    <p class="para text-start">
                    Customization:
                                    Customized logo(Min. Order 5000 pieces)
                                    Customized packaging(Min. Order 5000 pieces)
                                    Graphic customization(Min. Order 5000 pieces)
                    </p>
                    

                    <p class="para text-start">
                        Shipping: Online
                    </p>
                </div>
                </div>
                    </div>
                </div>
                
            </div>
        </section>

        </div>
    );
}

export default MoreDetails;