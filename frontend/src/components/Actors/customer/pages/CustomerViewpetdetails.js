
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import kitties3 from '../images/kitties3.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/Customerviewpetdetails.css';


function Customerviewpetdetails(){
    return (
        <div>
            <section className="section bg-c-light border-top">
                <h4 class="col-sm-12 petdetailsheader">Pet Posts - Click adopt request button to view the adopt request form <i class="fa-solid fa-paw"></i></h4>
                <div class="admincard col-12">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <div className="container ">
                        <div className="row bg-success text-white titlebox"> 
                            <div className="col-md-4 my-auto"></div>
                            <h3 className="text-center ">Shadow <i class="fa-solid fa-paw"></i></h3>
                        </div>
                    </div>
                    <div class="row" id="petdetailsrow">
                        <div class="col-sm-4 column left">
                            <img src={puppy4} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                        </div>
                        <div class="col-sm-8 column right card-body" id='cardTitle'>                            
                            <div class>
                                    <table class="table card-body" id="profiletable">
                                        <tbody>
                                            <tr>
                                                <th id="profilelabel">Pet Name</th>
                                                <td>Shadow</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Breed</th>
                                                <td>Mix Breed</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Gender</th>
                                                <td>Male</td>
                                            </tr>

                                            <tr>
                                                <th id="profilelabel">Age</th>
                                                <td>2 Months</td>
                                            </tr>

                                            <tr>
                                                <th id="profilelabel">Vaccinated status</th>
                                                <td class="text-danger">Vaccinated</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col-sm-9 card " id="petdescription">Shadow is a calm, innocent and child friendly puppy. Its Vaccinations are up to date. Also It is in good health. </div>
                                </div>
                            </div>
                            <Link to="adoptrequestform"><button type="button" class=" col-sm-10 btn btn-success deleteBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">request to adopt <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Customerviewpetdetails;

