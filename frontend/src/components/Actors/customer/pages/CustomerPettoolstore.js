import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerPettoolstore.css';
import {Link} from 'react-router-dom';
import pstorevectors from  '../images/pettoolstore.jpg';
import Pagination from  './pagination';

import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerPettoolstore(){

    const [toolstore_id,setToolstorerid]=useState('');
    const [users,setUser]=useState([]);
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [city,setCity]=useState('');
    const [street,setStreet]=useState('');
    const [shopname,setShopname]=useState('');
    const getUsers=async e=>{
        e.preventDefault();
        console.log("hiiii");
        try{
            fetch("http://localhost:5000/petadopter/findapet/findpettoolstore").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].Name);
                    setToolstorerid(resp[0].Toolstore_ID);
                    setUser(resp)
                    setName(resp[0].Name)
                    setNumber(resp[0].Number)
                    setStreet(resp[0].Street)
                    setCity(resp[0].City)
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
            <h3 class="d-none d-md-block" id="searchpetstoreheading">Find Every thing for your pet <i class="fa fa-paw"></i> from our online market where number of 
            registered shops <i class="fa fa-shop"></i> with everything to your pet <i class="fa fa-paw"></i> to sell</h3>
            <div id="col col-md-6 pettoolstorearea">
                <div class="mb-3" id="petstoresearchbars">
                    <label for="Pharmacyname" class="form-label">Search by name <i class="fa fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" value={shopname} onChange={(e)=>setShopname(e.target.value)} placeholder="enter name of your shop"></input>
                    <button class="btn btn-success" id="petstoresearchbtn" onClick={getUsers}>Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="mb-3" id="petstoresearchbars">
                    <label for="Pharmacyname" class="form-label">Search by Item <i class="fa fa-magnifying-glass"></i></label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter of name your Medicine"></input>
                    <button class="btn btn-success"id="petstoresearchbtn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            
                <div class="row">
                    {
                        users.map((item,i)=>{
                            let url = "petstore?id="+item.Toolstore_ID;
                            if(item.name.toLowerCase()==shopname.toLowerCase()){
                                return (
                                    <div class="col-sm-2 card" id="petstorecard" >
                                        <h4 class="text-success petname">{item.name}</h4>
                                        <div className="underline underlineJusty"></div>
                                        <img src={pstorevectors} class="card-img-top" id="pettoolstoreimg" alt="Tommy"></img>
                                        <div class="card-body">
                                            <p class="card-text"></p>
                                            <h6 class="petage text-danger">{item.number}, {item.Street}, {item.City}</h6>
                                            <Link to={url}><button type="button" class="btn btn-success" id="petstorebtn">Shop <i class="fa fa-bag"></i></button></Link>
                                        </div>
                                    </div>
                                );
                            }    
                        })
                    }
                </div>
            </div>
                <Pagination></Pagination>
        </div>
    )
    
}

export default CustomerPettoolstore;