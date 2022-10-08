import React,{useState} from "react";
import './Notifications.css'
import Navbar from "../includes/Navbar";
function Notifications() {
    return (

<div>
    <Navbar/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Notifications</h3>
                </div>
            </div>
        </section>
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading">System Notification</h5>
                <div className="underline"></div>
                <p class="para">
                    Good morning Ann.  Welcome to pet Heaven!!
                    PetHeaven is an online web based system to facilitate services for animals specially cats and dogs. 
                    This is system to facilitate services to the orphan animals, mainly cats and dogs.
                </p>
                </div>
                </div>
            </div>
            
        </section>



        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading">Admin Notification</h5>
                <div className="underline"></div>
                <p class="para">
                    Good morning.  Welcome to pet Heaven! & You can donate Pets to Us.
                    Keep signin to PetHeaven always. It will help you to Find your dream pet.
                </p>
                </div>
                </div>
            </div>
            
        </section>
        

        </div>









//       <div>
//     <div className="subHeader">
//     <div className="topic">Notifications</div>
//     </div>

//      <table class="table table-striped mt-3 mb-3">
//   <thead>
//     <tr>
//       <th >User name</th>
//       <th >Name</th>
//       <th >Notifications</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>sasindu</td>
//       <td>Mark</td>
//       <td>auto</td>
//     </tr>
//     <tr>
//       <td>Thisara</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//     </tr>
//     <tr>
//       <td>Sandaruwan</td>
//       <td>Larry</td>
//       <td>the Bird</td>
//     </tr>
//   </tbody>
// </table>

//      </div>
    );
  }
  
  export default Notifications;