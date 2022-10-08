
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerFindpet.css';
import medicinetin from '../images/medicinetin.jfif';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerBuymedicine() {
    return(
        <div>
            <NavbarUsers/>
            <section className="section bg-c-light border-top">
                <h4 class="col-sm-12 petdetailsheader text-success">Arogya Pharmacy<i class="fa-solid fa-paw"></i></h4>
                <h6 class="col-sm-12 petdetailsheader ">No 20, Galle Road,Dehiwala <i class="fa-solid fa-paw"></i></h6>
                <div class="admincard col-12">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <div class="row" >
                            <div class="col-sm-3 column left" id="petdetailsrow">
                                <img src={medicinetin} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                            </div>
                            <div class="col-sm-9 column right card-body" id='cardTitle'>
                                
                                <div class="card-body">
                                    <table class="table card-body" id="profiletable">
                                        <tbody>
                                            <tr>
                                                <th id="profilelabel">Item Name</th>
                                                <td id="profileitem">Super Allergy Relief</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Brand</th>
                                                <td id="profileitem">PetGo</td>
                                            </tr>
                                    
                                            <tr>
                                                <th id="profilelabel">Manufacture Country</th>
                                                <td id="profileitem">United Kingdom</td>
                                            </tr>

                                            <tr id ="expirydaterow">
                                                <th>Expiry date</th>
                                                <td>2022.12.05</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col-sm-9" id="petdescription"> The PetGo- Super Allergy Relief is specially created for Dogs skin allergies, 
                                        It is proven for 20 years. Apply the jel in your pet
                                        Body while bathing twice a week
                                    </div>
                                </div>
                            </div>
                            <button type="button" class=" col-sm-10 btn btn-success deleteBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default CustomerBuymedicine;