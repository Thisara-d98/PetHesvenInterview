
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerFindpet.css';
import cage from '../images/cage.jfif';
import NavbarUsers from '../../../includes/NavbarUsers';

function CustomerBuypettool() {
    const [users, setUser] = useState([])
    const [toolstoreid,setToolstoreid] = useState('');
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [street,setStreet]= useState('');
    const [city,setCity] = useState('');
    const [itemname,setItemname]= useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [expirydate,setExpirydate] = useState('');
    const [manufacturer,setManufacturer] = useState('');
    const [brand,setBrand] = useState('');
   
    const getUsers=async e=>{
    
        console.log("hiiii");
        try{
            fetch("http://localhost:5000/petadopter/findapet/findpettoolstore/pettoolstorepage/items").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].Name);
                    setToolstoreid(resp[0].Toolstore_ID);
                    setUser(resp)
                    setName(resp[0].Name)
                    setNumber(resp[0].Number)
                    setStreet(resp[0].Street)
                    setCity(resp[0].City)
                    setItemname(resp[0].item_name)
                    setPrice(resp[0].Price)
                    setManufacturer(resp[0].manufacture_country)
                    setExpirydate(resp[0].expiry_date)
                    setDescription(resp[0].Description)
                    setBrand(resp[0].brand)
                    setItemname(resp[0].item_name)
                })
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }

    useEffect(() => {
        getUsers()
    })

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    console.log(id);
    return(
        <div>
            
            <NavbarUsers/>
            <section className="section bg-c-light border-top">
                {
                    users.map((item,i)=>{
                        return(
                            <div>
                            <h4 class="col-sm-12 petdetailsheader text-success">{item.name}<i class="fa-solid fa-paw"></i></h4>
                            <h6 class="col-sm-12 petdetailsheader ">{item.number},{item.Street}, {item.City}<i class="fa-solid fa-paw"></i></h6>
                            <div class="admincard col-12">     
                                <div className="card shadow cardpadding" id='cardone'>
                                    <div class="row">
                                        <div class="col-sm-3 column left">
                                            <img src={cage} className="w-50 border-bottom mx-auto d-block img-fluid" alt="Services"/>
                                        </div>
                                        <div class="col-sm-9 column right card-body" id='cardTitle'>
                                            <div class="card-body">
                                                <table class="table card-body" id="profiletable">
                                                    <tbody>
                                                        <tr>
                                                            <th id="profilelabel">Item Name</th>
                                                            <td id="profileitem">{item.item_name}</td>
                                                        </tr>
                                    
                                                        <tr>
                                                            <th id="profilelabel">Brand</th>
                                                            <td id="profileitem">{item.brand}</td>
                                                        </tr>
                                    
                                                        <tr>
                                                            <th id="profilelabel">Manufacture Country</th>
                                                            <td id="profileitem">{item.manufacture_country}</td>
                                                        </tr>

                                                        <tr id ="expirydaterow">
                                                            <th  class="text-warning">Expiry date</th>
                                                            <td>{item.expiry_date}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="col-sm-9" id="petdescription">{item.Description}</div>
                                            </div>
                                        </div>
                                        <button type="button" class=" col-sm-10 btn btn-success deleteBtn" id="adoptbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        )
                    
                    })
                }    
            </section>
        </div>
    )
}
export default CustomerBuypettool;