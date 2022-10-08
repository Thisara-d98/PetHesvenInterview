import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import {Link} from 'react-router-dom';
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorcarousel from './CustomerDoctorcarousel';
import Pagination from  './pagination';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerDoctorAppoint(){
    const [users,setUser] = useState([])
    const [doctorname,setDoctorname]=useState("");
    const [doctorid,setDoctorid]=useState("");
    const [address,setAddress]=useState("");
    const [name,setName]=useState("");
    var axios = require('axios');
    var data = JSON.stringify({});
    
   
    const getUsers=async e=>{
        e.preventDefault();
        console.log("hiiii");
        console.log(doctorname);
        try{
            
            fetch("http://localhost:5000/petadopter/findapet/finddoctors").then((result)=>
            {
                result.json().then((resp)=>{
                    setUser(resp)
                    setDoctorname(resp[0].fullname)
                    setDoctorid(resp[0].doctorID);
                    setAddress(resp[0].address)
                    console.log(resp[0].address);
                })
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }

    return(
        <div>
            <NavbarUsers/>
            <CustomerDoctorcarousel></CustomerDoctorcarousel>


            <h3 class="d-none d-md-block aboutsearchdoctorheading">Select best doctor for your pet among thousands of our registered qualified veteranians</h3>
            <form id="col col-sm-9 doctorform">
                <div class="col-sm mb-3" id="doctorsearchbar">
                    <label for="doctorname" class="form-label">Search by name</label>
                    <input type="text"  class="form-control" id="exampleFormControlInput1" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="enter name of your doctor"></input>
                </div>
                <button class="btn btn-success "id="docsearchbtn" onClick={getUsers}>Search <i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            
            <div class="row" id="doctorsearchcararea"> 
                {
                    users.map((item,i)=>{
                        let url="requestappoint?id="+item.doctorID;
                        if(item.fullname==name){
                            return(
                                <div class="col col-sm-2 card" id="doctorcard">
                                <h5 class="text-success petname">{item.fullname}</h5>
                                <div className="underline underlineJusty"></div>
                                    <img src={docvectors} class="card-img-top"  id="docproimg" alt="Tommy"></img>
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <h6 class="text-danger doctown">{item.address}</h6>
                                        <Link to={url}><button type="button" class="btn btn-success" id="channelbtn">Channel <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                    </div>
                                </div>
                            )
                        } 
                    })
                
                }
                        
            </div>
            <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerDoctorAppoint;