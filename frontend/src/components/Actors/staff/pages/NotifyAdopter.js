import React,{useState} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/NotifyAdopter.css';
import NavbarUsers from '../../../includes/NavbarUsers';


function NotifyAdopter() {
    const [name, setName] = useState('');
    const [contact,setDate]=useState('');
    const [message,setType] = useState('');
    const [status,setStatus] = useState('1');
    const [buttonText, setButtonText] = useState('Notify ');


    const handleSubmit = async e => {
        e.preventDefault();
        setButtonText('Notified ... ');
        try {
            const body = {name,contact,message,status};
            
            const response = await fetch(
            "http://localhost:5000/staffmember/notifyadopter",
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
            console.log("Falil");
        }
    } 

    return(
        <div>
        <NavbarUsers/>
            <section className="py-4 ">
            <div className="container ">
                <div className="row bg-success text-white titlebox"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center ">Notify Adopter <i class="fa-solid fa-bell"></i></h3>
                </div>
            </div>
           
            </section>
            <div>
               
            </div>
            <section className="section bg-c-light">
                <div className="container">
                    <div className="card shadow notificationForm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <h6>
                                        <i class="fa-solid fa-smile-beam"></i><b> Kindly Notify Them..... </b>
                                        
                                    </h6>
                                    <hr/>
                                    <form>
                                        <div className="form-group">
                                            <label className="mb-1">Adopter Name</label>
                                            <input type="text" className="form-control" placeholder="Adopter Name" required></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1 mt-1">Mobile Number</label>
                                            <input type="text" className="form-control" placeholder="Adopter's Contact Number" required></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Message</label>
                                            <textarea rows="4" className="form-control" placeholder="Enter Your Message" required></textarea>
                                        </div>
                                        <div className="form-group py-3">
                                            <div class="container px-4 text-center">
                                                <div class="row gx-5 ">
                                                        <div class="col ">
                                                            <button type="submit" className="btn btn-success shadow w-100 postPetBtn"onClick={handleSubmit}><b>{buttonText}  <i class="fa-solid fa-paper-plane"></i></b></button>
                                                        </div>
                                                        <div class="col ">
                                                            <button type="reset" className="btn btn-danger shadow w-100 postPetBtn"><b>Discard <i class="fa-solid fa-times"></i></b></button>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                               
                                            
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-12 border-left">
                                    <div className="form-group confimtext">
                                        <label className="mb-1 mt-1"><b>Are you sure to send ?</b></label>
                                    </div>                  
                                    <div className="form-group py-3">
                                        <div class="container px-4 text-center">
                                            <div class="row gx-5 ">
                                                    <div class="col ">
                                                        <Link to="/viewpets" class="nav-link active">
                                                            <button type="button" className="btn btn-success shadow w-100 postPetBtn"><b>Yes  <i class="fa-solid fa-check"></i></b></button>
                                                        </Link>
                                                    </div>
                                                    <div class="col ">
                                                        <button type="button" className="btn btn-danger shadow w-100 postPetBtn" data-bs-dismiss="modal"><b>No <i class="fa-solid fa-times"></i></b></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
        </div>
        
    );
}

export default NotifyAdopter;