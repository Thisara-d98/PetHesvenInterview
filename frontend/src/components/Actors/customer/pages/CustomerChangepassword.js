import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  


import '../css/CustomerChangePassword.css';
import '../css/signup.css';

function CustomerChangepassword(){
    return(
            <div>
                <h3 id="changepasswordheader">Change Password</h3>
                <div class="card card-body">
                <div>
                    <label for="Password" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="passwordinput" placeholder="Enter your new Password here"></input>
                </div>
                <div>
                    <label for="confirmpassword" class="form-label">confirm password</label>
                    <input class="form-control" id="confirmpassword" rows="3" placeholder="confirm your password here"></input>

                    <button type="submit" action="submit" class="btn btn-success" id="changepwbtn">Submit <i class="fa-solid fa-check"></i></button>
                    <button type="reset" action="reset" class="btn btn-danger" id="changepwbtn">Reset <i class="fa-solid fa-xmark"></i></button>
                </div>
                
            </div>
            </div>
    )
}

export default CustomerChangepassword;
