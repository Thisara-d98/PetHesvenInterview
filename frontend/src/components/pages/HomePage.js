import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "../includes/Navbar";
import Slider from "../includes/Slider";
import VetClinic from "../images/vet1.jpg";
import Pharmacy from "../images/pharmacy1.jpg";
import PetToolStore from "../images/petTool.jpg";
import CustomerFeaturedAnimals from "../Actors/customer/pages/CustomerFeaturedanimals";
import './HomePage.css';

function HomePage()
{
    return(
        <div>
            <Navbar />
            <Slider/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">PetHeaven Services</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                <b> PetHeaven is an online web based system to facilitate services for animals specially <div className="yellow"> Cats and Dogs.</div></b> 
                            </p>
                            <p><b>These are our services... </b></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow">
                            <img src={VetClinic} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Vetrinary Clinic</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven offer online consultation from thousand of registered qualified doctors.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            {/* <Link to="/pharmacy" class="nav-link active"> */}
                            <img src={Pharmacy} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Pharmacy</h6>
                                    <div className="underline"></div>
                                    <p>Buy medicines for your pets online from registered petheaven pharmacies.</p>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                            {/* <Link to="/PetToolStore" class="nav-link active"> */}
                            <img src={PetToolStore} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Tool Store</h6>
                                    <div className="underline"></div>
                                    <p>Dream shopping for your pet with petheaven pet tool stores with unlimited pet products.</p>
                                </div>
                            {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Featured Pets</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-c-light border-top">
                <div className="container">
                    {/* <div className="row"> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={VetClinic} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Vetrinary Clinic</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={Pharmacy} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Pharmacy</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={PetToolStore} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Tool Store</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={VetClinic} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Vetrinary Clinic</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={Pharmacy} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Pharmacy</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-md-2">
                            <div className="card shadow">
                            <img src={PetToolStore} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Pet Tool Store</h6>
                                    <div className="underline"></div>
                                    <p>PetHeaven is an online web based system to facilitate services for animals specially</p>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                    <CustomerFeaturedAnimals></CustomerFeaturedAnimals>
                </div>
                
            </section>
        </div>
    );
}

export default HomePage;