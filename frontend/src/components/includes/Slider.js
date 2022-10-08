import React from "react";
import {Link} from 'react-router-dom';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import './Slider.css';


function Slider()
{
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={slider1} id='img' class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div class="bigfont">Lets Save Their Lives</div>
                <div class="smallfont"><b>You can join with us by donating</b> </div>
                <Link to="/donation" className="btn btn-warning shadow"><div class="smallfont1"><b>Donate</b></div></Link>
            </div>
            </div>
            <div class="carousel-item">
            <img src={slider2} id='img' class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div class="bigfont">Come & join with us</div>
                <div class="smallfont"><b>Lets enjoy our quality services</b></div>
            </div>
            </div>
            <div class="carousel-item">
            <img src={slider3} id='img' class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <div class="bigfont">SriLankan best PetCare is now Available for You</div>
                <div class="smallfont"><b>Find your dream pet through our PetHeaven</b></div>
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
    );
}

export default Slider;
