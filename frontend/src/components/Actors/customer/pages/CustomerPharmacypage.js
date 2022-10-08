import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import {Link} from 'react-router-dom'; 
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorcarousel from './CustomerDoctorcarousel.js';
import Pagination from  './pagination';
import Profile from '../images/profile.png';
import medicinetin from '../images/medicinetin.jfif';
import medicinebottle from '../images/medbottle.jfif';
import '../css/Customerpharmacypage.css'
import '../css/profileview.css';
import NavbarUsers from '../../../includes/NavbarUsers';
function CustomerPharmacypage(){
    const [users,setUsers]= useState([]);
    const [pharmacyid,setPharmacyID]= useState('')
    const [name,setName]= useState('')
    const [street,setStreet]= useState('')
    const [Registrationnumber,setRegistrationnumber]= useState('')
    const [medicinename,setMedicinename]= useState('')
    const [medicineid,setMedicineid]= useState('')
    const [price,setPrice]= useState('')
    const [city,setCity]= useState('')
    const [number,setNumber]= useState('')
    const getUsers=async e=>{
        try{
            fetch("http://localhost:5000/petadopter/findapet/findpharmacy/pharmacypage").then((result)=>
            {
                
                result.json().then((resp)=>{
                    setUsers(resp)
                    setPharmacyID(resp[0].Pharmacy_ID)
                    setName(resp[0].name)
                    setStreet(resp[0].Street)
                    setCity(resp[0].City)
                    setNumber(resp[0].Number)
                    setMedicineid(resp[0].Medicine_ID)
                    setPrice(resp[0].Price)
                    setRegistrationnumber(resp[0].Registration_number)
                    setMedicinename(resp[0].Medicine_name)
                    }
                )
            })

        
        }
        catch (err) {
            console.log("Faalil");
        }
    }
    useEffect(() => {
        getUsers()
    })
    var init=0;
    return (
        <div>
            <NavbarUsers/>
            {
                
                users.map((item,i)=>{
                const queryString = window.location.search;
                console.log(queryString);
                const urlParams = new URLSearchParams(queryString);
                const id = urlParams.get('id')
                console.log(id);
                if(item.Pharmacy_ID==id){
                    if(init==0){
                        init=1;
                        return(
                            <div>
                                
                                <div id="pharmacyprofilearea">
                                    <div class="card" id="profileviewcard">
                                        <div class="row">
                                            <div class="col col-sm-3 column">
                                                <img src={Profile} ></img>
                                            </div>

                                            <div class="col col-sm-9 column">
                                                <div class="card-body">
                                                    <table class="table" id="profiletable">
                                                        <tbody>
                                                            <tr>
                                                                <th id="profilelabel">Shop name</th>
                                                                <td id="profileitem">{item.Name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th id="profilelabel">Address</th>
                                                                <td id="profileitem">{item.Number}, {item.Street}, {item.City}</td>
                                                            </tr>
                                                        {/* <tr>
                                                        <th id="profilelabel">Telephone number</th>
                                                        <td id="profileitem">{</td>
                                                        </tr>
                                                        <tr>
                                                            <th id="profilelabel">Email</th>
                                                        <td id="profileitem">absilva@gmail.com</td>
                                                        </tr> */}
                                                            <tr>
                                                                <th id="profilelabel">Registration number</th>
                                                                <td id="profileitem">{item.Registration_number}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                        {/* <div class="searchbardiv">
                                        <form>
                                        <div class="mb-3">
                                        <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search medicine by name"></input>
                                        <button type="submit" class="btn btn-success " id="petsearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                                        </div>

                                        </form>
                                        </div> */}
                                
                                    <h3 class="featuredanimalsheader">Medicine stock <i class="fa-solid fa-paw"></i></h3>
                                        <div class="row cardbody featuredanimalarea" > 
                                            <div class="col-md-2 card"  id="card1" >
                                            <h5 class="text-success petname">{item.medicine_name}</h5>
                                            <div className="underline underlineJusty"></div>
                                            <img src={medicinetin} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                                            <div class="card-body">
                                                <p class="card-text"></p>
                                                <h6 class="petage text-danger">{item.price}</h6>
                                                <Link to="medicinedetails"><button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                            </div>
                                        </div>
                                    </div>
                               
                                
                            </div>
                        )
                    }
                
                    else{
                        return(
                            
                                <div class="row cardbody featuredanimalarea" > 
                                    <div class="col-md-2 card"  id="card1" >
                                        <h5 class="text-success petname">{item.medicine_name}</h5>
                                        <div className="underline underlineJusty"></div>
                                        <img src={medicinetin} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                                        <div class="card-body">
                                            <p class="card-text"></p>
                                            <h6 class="petage text-danger">{item.price}</h6>
                                            <Link to="medicinedetails"><button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    }
                }
                })
                
            }
            <Pagination></Pagination>
        </div>
    )
}

export default CustomerPharmacypage;