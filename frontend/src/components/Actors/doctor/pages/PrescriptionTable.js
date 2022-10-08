import React,{useState} from "react";
import '../css/DoctorViewPetHistory.css';

function PrescriptionTable() {
    return (
        <div>
        {/* <div className="subHeader">
        <div className="topic">VIEW PET HISTORY</div>
        </div> */}
         
         <div class="DoctorViewPetHistorytable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Pet Name</th>
      <th scope="col">Age</th>
      <th scope="col">Disease</th>
      <th scope="col">Pet Type</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shaggy</td>
      <td>3</td>
      <td>Rabies</td>
      <td>Dog</td>
      
    </tr>
    <tr>
    <td>Shaggy</td>
      <td>3</td>
      <td>Rabies</td>
      <td>Dog</td>
      
    </tr>
    <tr>
    <td>Shaggy</td>
      <td>3</td>
      <td>Rabies</td>
      <td>Dog</td>
    </tr>
    <tr>
    <td>Shaggy</td>
      <td>3</td>
      <td>Rabies</td>
      <td>Dog</td>
    </tr>
    <tr>
    <td>Shaggy</td>
      <td>3</td>
      <td>Rabies</td>
      <td>Dog</td>
    </tr>
   
  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default PrescriptionTable;