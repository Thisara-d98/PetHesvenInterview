import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import petdog from '../images/petdog.jpg';
import '../css/signup.css';

function signup(){
    return(

            <div class="row " id="signuparea">
                <div class="col-sm-6 column leftimg" ><img src={petdog} id="signuppetimg"></img></div>
                <div class="col-sm-6 column rightform cardbody" > 
                    <h3 id="signupheader">Sign up Forum <i class="fa-solid fa-pen"></i></h3>
                    <form class="signupform">
                        <div id="signuprows">
                            <label for="yourname" class="form-label" id="signupformlabels">Your Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your name here"></input>
                        </div>
                        <div id="signuprows">
                            <label for="username" class="form-label" id="signupformlabels">UserName</label>
                            <input class="form-control" id="usernameinput" rows="3" placeholder="Enter new User name here"></input>
                        </div>

                        <div  id="signuprows">
                            <label for="Phone number" class="form-label" id="signupformlabels">Phone number</label>
                            <input type="phonenumber" class="form-control" id="phoneinput" placeholder="Enter your working Phone number here"></input>
                        </div>
                        <div id="signuprows">
                            <label for="email" class="form-label" id="signupformlabels">Email</label>
                            <input class="form-control" id="emailinput" rows="3" placeholder="Enter your active E-mail here"></input>
                        </div>

                        <div id="signuprows">
                            <label for="Password" class="form-label" id="signupformlabels">Enter Password</label>
                            <input type="password" class="form-control" id="passwordinput" placeholder="Enter your new Password here"></input>
                        </div>
                        <div  id="signuprows">
                            <label for="confirmpassword" class="form-label" id="signupformlabels">confirm password</label>
                            <input class="form-control" id="confirmpassword" rows="3" placeholder="confirm your password here"></input>
                        </div>
                        <Link to ='findapet'><button type="submit" action="submit" class="btn btn-success" id="signupbtn">Submit <i class="fa-solid fa-check"></i></button></Link>
                        <button type="reset" action="reset" class="btn btn-danger" id="signupbtn">Reset <i class="fa-solid fa-xmark"></i></button>
                    </form>
                </div>
                
            </div>
        )
}

export default signup;