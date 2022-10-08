import React,{useState} from "react";
import '../css/DoctorViewPetHistory.css';

function ConsultationPage() {
    return (
        <div>
        {/* <div className="subHeader">
        <div className="topic">VIEW PET HISTORY</div>
        </div> */}
         
         <div class="DoctorViewPetHistorytable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone number</th>
      <th scope="col">Service Type</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sasindu</td>
      <td>Senn@gmail.com</td>
      <td>0770178643</td>
      <td>About Cat</td>
      
    </tr>
    <tr>
      <td>Thisara</td>
      <td>thisara@gmail.com</td>
      <td>0912378546</td>
      <td>About dog</td>
      
    </tr>
    <tr>
      <td>Charundya</td>
      <td>charu@gmail.com</td>
      <td>0914568546</td>
      <td>About dog</td>
    </tr>
    <tr>
      <td>Sadaruwan</td>
      <td>sadaruwan@gmail.com</td>
      <td>0912378126</td>
      <td>About cat</td>
    </tr>
    <tr>
    <td>Kushadi</td>
      <td>kushadi@gmail.com</td>
      <td>0911378546</td>
      <td>About dog</td>
    </tr>
   
  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default ConsultationPage;