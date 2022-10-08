import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctorappoint.css';
import dogvaccine from "../images/catmedic.png";
import doctorcalls from '../images/doctorcalls.jpg';
import texting from '../images/texting.jfif';
function CustomerDoctorcarousel(){

    return(
        <div class="d-none d-md-block" >
            <div class="carousel slide" id="docappointcarousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={dogvaccine} class="d-block" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p class="carouseltitle" id="carouselcontent">Search for best doctors for your pets</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={doctorcalls} class="d-block" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p class="carouseltitle" id="carouselcontent">Appoint time for consultation from your home</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={texting} class="d-block " alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <p1 class="carouseltitle" id="carouselcontent">Consultation through video calls and messages</p1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
    
}

export default CustomerDoctorcarousel;