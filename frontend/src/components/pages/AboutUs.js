import React from "react";
import './AboutUs.css';
import Navbar from "../includes/Navbar";
import straydog from '../images/straydog.jpeg';
import webapp from '../images/webapp.jpeg';
import cat from '../images/cat.jpeg';
function AboutUs()
{
    return(
        <div>
            <Navbar/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">About Us</h3>
                </div>
            </div>
        </section>
        <section className="section bg-c-light border-bottom">
            <div className="container">
               
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading">PetHeaven</h5>
                <div className="underline"></div>
                <img src={straydog} class="card-img-top"  id="aboutusimg" alt="Tommy"></img>
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
            
        </section>
        <section className="section bg-c-light border-bottom border-top">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                    <div className="row">
                    <div className="col-md-12 mb-5">
                    <h5 className="main-heading">Vision and Mission</h5>
                        <div className="underline mx-float"></div>
                    </div>
                    <div className="col-md-6 text-center">
                    <h6 className="main-heading">Our Vision</h6>
                    <img src={webapp} class="card-img-top"  id="" alt="Tommy"></img>
                    <p class="para">
                    Our vision is to create a web based system for facilitating services for animals,
                    mainly cats and dogs, around the island to perform the adoption process using one
                    platform. 
                    </p>
                </div>
                <div className="col-md-6 text-center border-start">
                    <h6 className="main-heading">Our Mission</h6>
                    <img src={cat} class="card-img-top"  id="" alt="Tommy"></img>
                    <p class="para">
                    Through that we are hoping to increase the interest on pet adoption within the
                    community and reduce the death rates of stray animals due to the accidents.
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

export default AboutUs;