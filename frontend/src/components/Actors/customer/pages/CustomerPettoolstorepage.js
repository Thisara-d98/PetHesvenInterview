import React,{useState,useEffect,useSearchParams,Component}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link,useLocation} from 'react-router-dom';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/CustomerDoctorappoint.css';
import docvectors from  '../images/docvector.png';
import CustomerDoctorCarousel from './CustomerDoctorcarousel';
import Pagination from  './pagination';
import Profile from '../images/profile.png';
import cage from '../images/cage.jfif';
import pendants from '../images/pendants.jfif';
import catfood from '../images/catfood.jpg';
import dogchain from '../images/dogchain.jpg';
import meo from '../images/meo.jpg';
import dogplate from '../images/dogplate.jfif';
import '../css/Customerpharmacypage.css'
import '../css/profileview.css';
import NavbarUsers from '../../../includes/NavbarUsers';

function Customerpettoolstorepage(){
    const [users,setUsers]=useState([])
    const [name,setName]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [street,setStreet]=useState('')
    const [city,setCity]=useState('');
    const [tool,setTool]=useState([]);
    const [toolname,setToolname]=useState('');
    const [itemname,setItemname]=useState('')
    const [price,setPrice]=useState('')
    const [brand,setBrand]=useState('')
    const [country,setCountry]=useState('')
    const [expirydate,setexpirydate]=useState('')
    const [image,setImage]=useState('')
    const [toolstore_id,setToolstoreid]=useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id"))
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers=async e=>{
        try{
            fetch("http://localhost:5000/petadopter/findapet/findpettoolstore/pettoolstorepage").then((result)=>
            {
                result.json().then((resp)=>{
                        setUsers(resp)
                        setToolstoreid(resp[0].id)
                        setItemname(resp[0].item_name)
                        setName(resp[0].name)
                        setPhonenumber(resp[0].phonenumber)
                        setEmail(resp[0].email)
                        setNumber(resp[0].number)
                        setStreet(resp[0].Street)
                        setCity(resp[0].City)
                    }
                )
            })

        
        }
        catch (err) {
            console.log("Faalil");
        }
    }


    useEffect(() => {
        getUsers();

    },[]);

    return (
        
        <div>
            <NavbarUsers/>
            <div>
                {
                    users.map((item,i)=>{
                        const queryString = window.location.search;
                        console.log(queryString);
                        const urlParams = new URLSearchParams(queryString);
                        const id = urlParams.get('id');
                        let url ="pettooldetails?id="+item.Tool_ID;
                        if(item.Toolstore_ID==id){
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
                                                                    <td id="profileitem">{item.name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th id="profilelabel">Address</th>
                                                                    <td id="profileitem">{item.number}, {item.Street}, {item.City}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th id="profilelabel">Telephone number</th>
                                                                    <td id="profileitem">077-2357890</td>
                                                                </tr>
                                                                <tr>
                                                                    <th id="profilelabel">Email</th>
                                                                    <td id="profileitem">absilva@gmail.com</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 class="featuredanimalsheader">Item stock <i class="fa-solid fa-paw"></i></h3>
                                        <div class="row cardbody featuredanimalarea" >
                                            <div class="col-md-2 card" id="card1">
                                                <h4 class="text-success petname">{item.item_name}</h4>
                                                <div className="underline underlineJusty"></div>
                                                <img src={meo} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                                                <div class="card-body">
                                                    <h6 class="petage text-danger">Rs.{item.Price}.00/=</h6>
                                                    <Link to={url}><button type="button" class="btn btn-success " id="adoptbtn">Buy <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            </div>
                {/* <div class="searchbardiv">
                    {/* <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="petsearchbyname" value={toolname} onchange ={(e)=>setToolname(e.target.value)} aria-describedby="petsearch" placeholder="search item by name"></input>
                            <button type="submit" class="btn btn-success " id="petsearchbtn" onClick={getItem}>Search <i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form> */}
                {/*</div> */} 
                
            <Pagination></Pagination>
        </div>
    )
    
}


export default Customerpettoolstorepage;