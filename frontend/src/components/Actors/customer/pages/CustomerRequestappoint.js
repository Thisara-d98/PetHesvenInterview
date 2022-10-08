
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import kitties3 from '../images/kitties3.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerRequestappoint.css';
import DoctorCalender from './DoctorCalender';
import NavbarUsers from '../../../includes/NavbarUsers';
function CustomerRequestappoint(){
    const[fullname,setFullname] =useState('')
    const[email,setEmail]=useState('')
    const[phonenumber,setPhonenumber]=useState('')
    const[petname,setPetname]=useState('')
    const[symptoms,setSymptoms]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[doctorID,setDoctorID]=useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get('id');
            console.log(id);
            const body = {fullname,email,phonenumber,petname,symptoms,date,time,id};
            const response = await fetch(
                "http://localhost:5000/PetAdopter/findapet/channeldoctor/requestappoint",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            console.log(response);
        }
        catch (err) {
            console.log("Falil");
        }
    
    }

    return (

        <div>
                <NavbarUsers/>
                <div class="row m-md-5 m-3 ">
                    <div class="col-lg-4 bg-blue py-5 px-5">
                        <h4 class="text-center text-success mb-4">Contact Details</h4>
                        <div class="row">

                        <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4 ">
                        <p class="fw-bold">Name:</p>
                    </div>
                    <div class=" col-lg-8 col-md-5 col-8">
                        <p>J.A.Athapaththu</p>
                    </div>

                    <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4 ">
                        <p class="fw-bold">Call Me:</p>
                    </div>
                    <div class=" col-lg-8 col-md-5 col-8">
                        <p>070554312</p>
                    </div>

                    <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
                        <p class="fw-bold">Location:</p>
                    </div>

                    <div class=" col-lg-8 col-md-5 col-8">
                        <p>No 33,Kolonnawa road,Gotatuwa</p>
                    </div>

                    <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
                        <p class="fw-bold">Work hours:</p>
                    </div>

                    <div class=" col-lg-8 col-md-5 col-8">
                        <p class="">Monday-Friday 8:00AM-10:00PM Sunday-closed</p>
                    </div>

                    <div class=" col-lg-4 col-md-5 offset-lg-0 offset-md-2 col-4">
                        <p class="fw-bold">Registration Number:</p>
                    </div>

                    <div class=" col-lg-8 col-md-5 col-8">
                        <p class="">2014/Vet/16</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 bg-red py-5 px-5">
                <form action="">
                    <h4 class="text-center text-white mb-4">Make An Appointment</h4>
                    <div class="row">
                        <div class="col-md-6 col-12 my-md-0 my-2">
                            <input type="text" class="form-control bg-darkred" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Your Full Name"></input>
                        </div>
                        <div class="col-md-6 col-12 my-md-0 my-2 ">
                            <input type="email" class="form-control bg-darkred" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"></input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-12 my-2">
                            <input type="text" class="form-control bg-darkred" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Your Phone Number"></input>
                        </div>
                        <div class="col-md-6 col-12 my-2">
                            <input type="text" class="form-control bg-darkred" value={petname} onChange={(e) => setPetname(e.target.value)} placeholder="Your pet Name"></input>
                        </div>

                        <div class="col-md-12 col-12 my-2">
                            <textarea cols="10" rows="3" class="form-control bg-darkred shadow-none" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
                                placeholder="Briefly about pet symptoms"></textarea>
                        </div>

                        <div class="col-md-6 col-12 my-md-0 my-2">
                            <input type="date" class="form-control bg-darkred" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Booking date"></input>
                        </div>

                        <div class="col-md-6 col-12 my-md-0 my-2">
                            <input type="time" class="form-control bg-darkred" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Booking time"></input>
                        </div>

                        <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn" onClick={handleSubmit}>Send
                            Message</button> 
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-4 bg-blue py-5 px-5">
            
                <h4 class="text-center text-success mb-4">Booking Details</h4>
                <div class="col">
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a minima explicabo similique,
                    ipsum quam quibusdam quae. Assumenda quibusdam molestiae eveniet qui voluptatum nesciunt vero
                    molestias quas sint quia? Ratione?</p>
                </div>
                <Link to ="calender"><div class=""><button class="btn my-3 shadow-none text-uppercase">View calender</button></div></Link>
            </div>
        </div>

        </div>
        
    )
}

export default CustomerRequestappoint;