import React from "react";
import Slider from "../includes/Slider";

import './Donate.css';

function Donate()
{
    return(
        <div>
            <Slider/>
           
            {/* form */}
            <div>            
               
            <div className="subHeader">
    <div className="topic">Donate</div>
    </div>
     
      
    <div className='containerCreate'>
     <form>
    <div class="row mb-4">
      <div class="col">
        <div class="mb-3">
          <label for="firstName" class="form-label">First name</label>
          <input type="text" class="form-control" id="firstName"/>
        </div>
      </div>
      <div class="col">
      <div class="mb-3">
          <label for="lastName" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastName"/>
        </div>
      </div>
    </div>

           
    <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3">
          <label for="amount" class="form-label">Amount</label>
          <input type="text" class="form-control" id="amount"/>
    </div>

      
            <button type="submit" class="btn btn-primary">Pay</button>
      </form>

     </div>
        

            </div>
        </div>
    );
}

export default Donate;