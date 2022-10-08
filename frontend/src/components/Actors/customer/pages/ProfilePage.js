import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import Profileview from './Profileview';
import '../css/doctorAppointment.css';
import CustomerEditProfile from './CustomerEditprofile';
import CustomerChangePassword from './CustomerChangepassword';

function ProfilePage(){
    return(
        <div>
            <Profileview></Profileview>
            <div class="cardbody" id="profilebtn"> 
                <button class="btn btn-success " id="profilebtns" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-pen-to-square" ></i>Edit profile</button>
                <button class="btn btn-success " id="profilebtns" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fa-solid fa-pen-to-square"></i>Change password</button>
            </div>
            <div class="row">
                <div class="collapse column  profilecollapse col-md-6" id="collapseExample">
                    <div class="card card-body">
                        <CustomerEditProfile></CustomerEditProfile>
                    </div>
                </div>

                <div class="collapse column profilecollapse col-md-6" id="collapseExample1">
                    <div class="card card-body">
                        <CustomerChangePassword></CustomerChangePassword>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePage;