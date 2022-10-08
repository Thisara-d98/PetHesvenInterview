import React from "react";
import {useRef, useEffect, useState } from "react"; 
import {Link} from 'react-router-dom';
import Axios from 'axios';
import '../css/DoctorConsultation.css';
import NavbarUsers from "../../../includes/NavbarUsers";
import DoctorViewPetHistory from "./DoctorViewPetHistory";
import  ConsultationPage from "./ConsultationPage";





// import NavbarUsers from "../../../includes/NavbarUsers";

function DoctorConsultation() {

    const [users, setUser] = useState([])
    const [fullname, setName] = useState("");
    const [appointmentID, setappointmentID] = useState("");
    const [petname, setPetName] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [Message, setMessage] = useState("");
    const [roomname, setRoomName] = useState("");
    const [roomID, setRoomID] = useState("");

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:5000/Doctor/View_Appointment").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)

                setUser(resp)
                setName(resp[0].fullname)
                setappointmentID(resp[0].appointmentID)
                setPetName(resp[0].petname)
                setSymptoms(resp[0].symptoms)
                setDate(resp[0].date)
                setTime(resp[0].time)

            })
        })
    }

    console.warn(users)
    function UpdateUser(item) {
        console.log(item)

        setName(item.fullname)
        setappointmentID(item.appointmentID)
        setPetName(item.petname)
        setSymptoms(item.symptoms)
        setDate(item.date)
        setTime(item.time)

    }

    const [buttontext, setButtontext] = useState('Appoinment Accept');
    
const fixError_form = async e => {
    e.preventDefault();
    setButtontext('Done...');
    try {
        const body = { Message,appointmentID, roomID, roomname};
        const response = await fetch(
            "http://localhost:5000/Doctor/Consultation_accept",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            }
        );
        console.log(response);
    }
    catch (err) {
        console.log("Falil12");
    }
  
  }
  





    return(
     
     <div> 
      <NavbarUsers />
     
      <div>

<div class="adminviewtable">

    <table class="table view">
        <thead class="thead-dark">
            <tr>
                <th scope="col">appointment ID</th>
                <th scope="col">Name</th>
                <th scope="col">Pet Name</th>
                <th scope="col">Symptoms</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Operation</th>
            </tr>
        </thead>
        <tbody>

            {
                users.map((item, i) =>
                    <tr key={i}>
                        <td>{item.appointmentID}</td>
                        <td>{item.fullname}</td>
                        <td>{item.petname}</td>
                        <td>{item.symptoms}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>Accept</button></td>
                    </tr>
                )
            }


        </tbody>
    </table>
</div>
</div>



<div class="row m-md-5 m-3 ">
        
        <div class="lg-4 bg-red py-5 px-5">
            <form action="">
                <h4 class="text-center text-white mb-4">User consultation</h4>
                <div class="row">
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="text" class="form-control bg-darkred "   value={appointmentID} onChange={(e)=>{setappointmentID(e.target.value)}} placeholder="customer Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="text" class="form-control bg-darkred"  value={fullname} onChange={(e)=>{setName(e.target.value)}} placeholder="customer Email"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={petname} onChange={(e)=>{setPetName(e.target.value)}} placeholder="customer Phone Number"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={symptoms} onChange={(e)=>{setSymptoms(e.target.value)}} placeholder="Service Type"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="date" class="form-control bg-darkred "   value={date} onChange={(e)=>{setDate(e.target.value)}} placeholder="customer Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="time" class="form-control bg-darkred"  value={time} onChange={(e)=>{setTime(e.target.value)}} placeholder="customer Email"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={roomname} onChange={(e)=>{setRoomName(e.target.value)}} placeholder="room name"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={roomID} onChange={(e)=>{setRoomID(e.target.value)}} placeholder="room Id"/>
                    </div>
                    <div class="">
                        <textarea cols="10" rows="3" class="form-control bg-darkred shadow-none"
                            placeholder="Message"  value={Message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </div>
                    <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn" onClick={fixError_form}>{buttontext}</button> </div>

                </div>
            </form>
        </div>
        
    </div>



            </div>
     
    );
}
 export default DoctorConsultation;

