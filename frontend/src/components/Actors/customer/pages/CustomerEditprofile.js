import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import editvector from '../images/editvector.png';

import Profileview from './Profileview';
import '../css/CustomerEditProfile.css';
import '../css/signup.css';
function CustomerEditprofile(){
    return(
        <div>
        
            <h3 id="editprofileheader">Edit your Profile</h3>
            <div class="card cardbody">
                <form class="signupform" id="editprofileform">
                        <div id="signuprows">
                            <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your name here"></input>
                        </div>
                        <div id="signuprows">
                            <label for="username" class="form-label">UserName</label>
                            <input class="form-control" id="usernameinput" rows="3" placeholder="Enter new User name here"></input>
                        </div>

                        <div  id="signuprows">
                            <label for="Phone number" class="form-label">Phone number</label>
                            <input type="phonenumber" class="form-control" id="phoneinput" placeholder="Enter your working Phone number here"></input>
                        </div>
                        <div id="signuprows">
                            <label for="email" class="form-label">Email</label>
                            <input class="form-control" id="emailinput" rows="3" placeholder="Enter your active E-mail here"></input>
                        </div>
                        <button type="submit" action="submit" class="btn btn-success" id="customereditprofiles">Submit <i class="fa-solid fa-check"></i></button>
                        <button type="reset" action="reset" class="btn btn-danger" id="customereditprofiles">Reset <i class="fa-solid fa-xmark"></i></button>
                </form>
            </div>
            
            
        </div>
   
    )
}

export default CustomerEditprofile;