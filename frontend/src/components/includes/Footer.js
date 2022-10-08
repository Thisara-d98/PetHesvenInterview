import React from "react";
import {Link} from 'react-router-dom';
// import './Footer.css';

function Footer()
{
    return(
        <section className="section footer bg-success bg-gradient text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6>PetHeaven</h6>
                        <hr/>
                        <div>
                        <p className="text-white" >
                            PetHeaven is an online web based system to facilitate services for animals specially cats and dogs.
                            This is system to facilitate services to the orphan animals, mainly
                            cats and dogs, covering up all the functionalities related to them from pet adoption to
                            doctor consultation.
                        </p>
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <h6>Services Link</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/">Dogs</Link></div>
                        <div><Link to="/">Cats</Link></div>
                        <div><Link to="/">Vetrinary Consultation</Link></div>
                        <div><Link to="/">Pet tool store</Link></div>
                        <div><Link to="/">Pet Pharmacy</Link></div>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                        
                    </div>
                    <div className="col-md-3">
                        <h6>Information</h6>
                        <hr/>
                        <div><Link to="/about">About Us</Link></div>
                        <div><Link to="/contact">Contact Us</Link></div>
                        <div><Link to="/contact">Privacy and policies</Link></div>
                        <div><Link to="/contact">Terms and conditions</Link></div>
                        
                    </div>

                    <div className="col-md-3">
                    <h6>Contact</h6>
                        <hr/>
                        <div><p className="text-white mb-1">22 Palm Grove, Colombo 00300</p></div>
                        <div><p className="text-white mb-1">+94 112 145 340</p></div>
                        <div><p className="text-white mb-1">+94 112 145 341</p></div>
                        <div><p className="text-white mb-1">info@petheaven.com</p></div>
                    </div>

                    
                </div>
            </div>
            <section className="section footer1 bg-success text-white">
                <div><p className="text-white text-center">©2022 petheaven.com All trademarks are owned by PetHeaven organization</p></div>
            </section>
        </section>
        
    );
}

export default Footer;