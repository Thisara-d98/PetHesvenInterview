import React from "react";
import './otp.css';
import Navbar from "../includes/Navbar";
import { Link } from "react-router-dom";

function Otp()
{
    return(
        <div>
            <Navbar/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">OTP Verification</h3>
                </div>
            </div>
        </section>
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading">PetHeaven</h5>
                <div className="underline"></div>
                
                
             
 
    <div class="d-flex justify-content-center align-items-center continer">
      <div class="card py-5 px-3">
        <h5 class="m-0">Email verification</h5>
        <span class="mobile-text"
          ><b>We have sent an email with OTP. In order to complete the sign-up process, please enter your OTP.</b>
          
        </span>
        <div class="d-flex flex-row mt-5">
          <input type="text" class="form-control" autofocus="" />
          
        </div>
        
      </div>
    </div>
    


<Link to="/SignIn" class="nav-link active">
    <button type="button" class="btn btn-primary">Submit</button>

</Link>
    



                
                </div>
                </div>
            </div>
            
        </section>
        
        </div>
    );
}

export default Otp;