import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/doctorAppointment.css';

function DoctorAppointment(){
    return (
        <div class="doctorAppointment">
            <div class="card">
                <div class="card-body">
                        <h1 class="card-title">Pharmacies</h1>
                        <h3 class="card-subtitle mb-2 text-muted">All medicine needs of your pet can find from our registered pharmaci</h3>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                </div>
            </div>
                
        </div>
    
    )
}

export default DoctorAppointment;