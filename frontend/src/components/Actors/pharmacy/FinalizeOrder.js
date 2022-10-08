import React from "react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './FinalizeOrder.css';
import SelectTableComponent from "./select-table.component";
import NavbarUsers from "../../includes/NavbarUsers";


function FinalizeOrder()
{
    const[show,setShow]=useState(false);
    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Medical Prescription</h3>
                </div>
            </div>
        </section>
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h4 className="main-heading">Dr. Jagath Wijenayake <sub>BVSc(Pera)</sub></h4>
                <h6 class="slmc">Veterinary Consultant</h6>
                <h6 class="slmc">SLMC - 56879</h6>
                <hr/>
                <p class="para">
                    Pet Name : Rocky
                  
                </p>
                <p class="para">
                    Breed : American Staffordshire Terrier
                  
                </p>
                <p class="para">
                    
                    Age : 1 year 
                    
                </p>
                <p class="para">
                    Weight : 18 kg
                </p>
                </div>
                <div className="container mb-3">
                <div className="card shadow">
                <div className="card-body">
                    {/* <table class="table table-striped table-hover">

                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Dosage</th>
                            <th scope="col">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Cotrimaxazole 480 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Metronidazole 400 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Promethazine 10 mg</td>
                            <td>1.5 tab bd</td>
                            <td>5/365</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Ezo omeprazole 20 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            </tr>
                        </tbody>
                    </table> */}

                        <SelectTableComponent />
                       
                </div>
               
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                            
                    <button onClick={()=>setShow(true)} className="btn " id="complete-btn">
                        <span>Complete Order</span>
                    </button>
            
                </div>
            </div>
                </div>
                
            </div>
            
        </section>

         {/* Reject order message started here */}
         <section className="section bg-c-light">
        {show?
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h4 className="main-heading">Aradhana Veterinary Pharmacy</h4>
                <div className="underline"></div>
                <h6 class="slmc">Regiter No - 23587</h6>
                <hr/>
                <p class="para">
                    Your Prescription is <b>Completed</b>. You can take it now onwards. 
                </p>
                <p class="para">
                    Thank You!
                </p>
                <hr/>
                <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn" className="btn shadow w-100 ">Send</button>
            </div>
            <div className="col-md-2">
                <button onClick={()=>setShow(false)} type="button" id="reject-btn" className="btn shadow w-100 ">Discard</button>
            </div>
            </div>
                </div>
                </div>
            </div>:null
} 
        </section>
        {/* Reject order message ended here */}
        </div>
    )
}

export default FinalizeOrder;
