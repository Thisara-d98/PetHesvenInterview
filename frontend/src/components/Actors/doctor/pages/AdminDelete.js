import React,{useState} from "react";
import '../css/AdminDelete.css';


function AdminDelete() {
    return (
      <div>
      <div className="subHeader">
      <div className="topic">DELETE ACCOUNT</div>
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
          <label for="option" class="form-label">User Type</label>
          <select class="form-control" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">Customer</option>
              <option value="2">Doctor</option>
              <option value="3">Staff Member</option>
              <option value="4">Pet Store</option>
              <option value="5">Pharmacy</option>
          </select>
          </div>
  
   
      <div class="mb-3">
            <label for="userid" class="form-label">User ID</label>
            <input type="text" class="form-control" id="userid"/>
      </div>
  
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
  
        <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2"/>
        </div>
  
        
              <button type="Delete" class="btn btn-primary">Delete</button>
        </form>
  
       </div>
  
       </div>
     
    );
  }
  
  export default AdminDelete;