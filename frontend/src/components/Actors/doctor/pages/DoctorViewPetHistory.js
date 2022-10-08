import React,{useState} from "react";
import '../css/DoctorViewPetHistory.css';

function DoctorViewPetHistory() {
    return (
        <div>
        <div className="subHeader">
        <div className="topic">VIEW PET HISTORY</div>
        </div>
         
         <div class="DoctorViewPetHistorytable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">User Name</th>
      <th scope="col">Pet Name</th>
      <th scope="col">Pet Breed</th>
      <th scope="col">Last Vaccination Date</th>
      <th scope="col">Special Desease</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sasiya</td>
      <td>Senn</td>
      <td>asd</td>
      <td>2021.09.03</td>
      <td>gjy</td>
    </tr>
    <tr>
      <td>Sasiya</td>
      <td>Senn</td>
      <td>asd</td>
      <td>2021.09.03</td>
      <td>gjy</td>
    </tr>
    <tr>
      <td>Sasiya</td>
      <td>Senn</td>
      <td>asd</td>
      <td>2021.09.03</td>
      <td>gjy</td>
    </tr>
    <tr>
      <td>Sasiya</td>
      <td>Senn</td>
      <td>asd</td>
      <td>2021.09.03</td>
      <td>gjy</td>
    </tr>
    <tr>
      <td>Sasiya</td>
      <td>Senn</td>
      <td>asd</td>
      <td>2021.09.03</td>
      <td>gjy</td>
    </tr>
   
  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default DoctorViewPetHistory;