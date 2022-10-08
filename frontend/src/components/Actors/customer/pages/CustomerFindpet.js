
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import kitties3 from '../images/kitties3.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/CustomerFindpet.css';
import CustomerFeaturedAnimals from './CustomerFeaturedanimals';
import DoctorAppointment from './DoctorAppointment';
import Pagination from './pagination';
import Customerservices from './CustomerServices';
import Customerdocmessagetab from './CustomerDocmessagetab';
import NavbarUsers from '../../../includes/NavbarUsers';
function CustomerFindpet(){
    const [users, setUsers] = useState([])
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [color,setColor]=useState("");
    const [image,setImage]=useState("");
    const [petname,setPetname]=useState("");
    const [petcolor,setPetcolor]=useState("");
    const [type,setType]=useState('');
    const [filtereddata,setFiltereddata]=useState('');

    // useEffect(()=>{
    //     getUsers();
    //    },[])
    const getUsers=async e=>{
        e.preventDefault();
        
        try{

            fetch("http://localhost:5000/petadopter/findapet").then((result)=>
            {
                result.json().then((resp)=>{
                    console.log(resp[0].type)
                        setUsers(resp)
                        console.log();
                        setAge(resp[0].age)
                        setColor(resp[0].color)
                        setName(resp[0].name)
                        setImage(resp[0].image)
                        setType(resp[0].type)
                    }
                )
            })

          
        }
        catch (err) {
            console.log("Faalil");
        }

       

    }

    const getSearches=async e=>{
        try{
             const body={name};
            fetch("http://localhost:5000/findapet/searchpet").then((result)=>

            {
                result.json().then((resp)=>{
                    setUsers(resp)
                    setAge(resp[0].age)
                    setColor(resp[0].color)
                    setName(resp[0].name)
                    setImage(resp[0].image)
                })
                    // const newfilter=result.filter((resp)=>{
                    //     return resp[0].name.toLowerCase().includes(searchword.toLowerCase());
                    // });
                    // setFiltereddata(newfilter);
                    // setAge(newfilter[0].age)
                    // setColor(newfilter[0].color)
                    // setPetname(newfilter[0].name)
                    // setImage(newfilter[0].image)
            })
        }
        catch (err) {
            console.log("Faalil");
        }
    }
    

    return(
            <div>
                <NavbarUsers/>
                <div class="border-bottom border-success">
                    <div class="border-bottom border-success searchpets">
                        <p class="desc1">We have Dogs <i class="fa fa-dog"></i> and cats <i class="fa fa-cat"></i> who need space in your kind hearts. If you are interesting to adopt hit the request button and  
                        add a new member to your home. <i class="fa fa-home"></i>
                        </p>   
                    </div>
                </div>
                <CustomerFeaturedAnimals></CustomerFeaturedAnimals>
                <h3 class="searchanimalsheader">Search pets <i class="fa-solid fa-paw"></i> from thousands of pets <i class="fa-solid fa-paw"></i>
                in our petheaven  who will be<br></br>
                perfect family member for you. Search cats and dogs with your favourite color and age  </h3>
                <form>
                    <div class="dropdown" id ="findpetdropdown">
                        <select class="btn btn-secondary dropdown-toggle" type="button" value={type} onChange={(e)=>setType(e.target.value)} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" value="" >Type</option>
                                <option class="dropdown-item"  value="Dog">Dog</option>
                                <option class="dropdown-item" value="Cat">cat</option>
                        </select>
                        
                        <select class="btn btn-secondary dropdown-toggle" type="button" value={petcolor} onChange={(e)=>setPetcolor(e.target.value)} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" value="" >Color</option>
                                <option class="dropdown-item" value="black" >Black</option>
                                <option class="dropdown-item"  value="white">White</option>
                                <option class="dropdown-item" value="brown">brown</option>
                                <option class="dropdown-item" value="mixed">Mixed</option>
                        </select>

                        <select class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-expanded="false">
                                <option class="dropdown-item" >Age</option>
                                <option class="dropdown-item" >less than 6mo</option>
                                <option class="dropdown-item" >6mo - 2yrs</option>
                                <option class="dropdown-item" >over 2yrs</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success " id="petsearchbtn" onClick={getUsers} >Search <i class="fa-solid fa-magnifying-glass"></i></button>

                </form>

                <div class="searchbardiv">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="petsearchbyname" aria-describedby="petsearch" placeholder="search pets by name" value={petname} onChange={(e) => setPetname(e.target.value)}></input>
                            <button type="submit" class="btn btn-success " id="petsearchbtn" onClick={getUsers} >Search <i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </div>

                <div class=" bg-c-light row" id="findpetimgarea"> 
                    {
                        users.map((item,i)=>{

                            if(petname.toLowerCase()==item.name.toLowerCase()){
                                return(
                                    <div class="col-12 col-md-2 card">
                                        <h5 class="text-success petname">{item.name}</h5>
                                        <div className="underline underlineJusty"></div>
                                        <img src="item.mimeType;base64,${b64}" class="card-img-top" id="findpetimgs"></img>
                                        <div class="petage card-body">
                                            <h6 class="text-danger">{item.age}</h6>
                                            <h6 class="text-dark">{item.color}</h6>
                                            <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                )
                            }

                            if(type=='' && petname=='' && petcolor==''){
                                return(
                                    <div class="col-12 col-md-2 card">
                                        <h5 class="text-success petname">{item.name}</h5>
                                        <div className="underline underlineJusty"></div>
                                        <img src="item.mimeType;base64,${b64}" class="card-img-top" id="findpetimgs"></img>
                                        <div class="petage card-body">
                                            <h6 class="text-danger">{item.age}</h6>
                                            <h6 class="text-dark">{item.color}</h6>
                                            <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                )
                            }
                        
                            if(item.type==type && petname=='' && petcolor==''){
                                return(
                                    <div class="col-12 col-md-2 card">
                                        <h5 class="text-success petname">{item.name}</h5>
                                        <div className="underline underlineJusty"></div>
                                        <img src="item.mimeType;base64,${b64}" class="card-img-top" id="findpetimgs"></img>
                                        <div class="petage card-body">
                                            <h6 class="text-danger">{item.age}</h6>
                                            <h6 class="text-dark">{item.color}</h6>
                                            <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                )
                            }

                            else if(item.color.toLowerCase()==petcolor.toLowerCase() && item.type==type){
                                return(
                                    <div class="col-12 col-md-2 card">
                                        <h5 class="text-success petname">{item.name}</h5>
                                        <div className="underline underlineJusty"></div>
                                        <img src="item.mimeType;base64,${b64}" class="card-img-top" id="findpetimgs"></img>
                                        <div class="petage card-body">
                                            <h6 class="text-danger">{item.age}</h6>
                                            <h6 class="text-dark">{item.color}</h6>
                                            <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                )
                            }

                            if(item.name.toLowerCase()==petname.toLowerCase() && item.color==''){
                                return(
                                    <div class="col-12 col-md-2 card">
                                        <h5 class="text-success petname">{item.name}</h5>

                                        <div className="underline underlineJusty"></div>
                                        <img src="item.mimeType;base64,${b64}" class="card-img-top" id="findpetimgs"></img>
                                        <div class="petage card-body">
                                            <h6 class="text-danger">{item.age}</h6>
                                            <h6 class="text-dark">{item.color}</h6>
                                            <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                        
                </div> 
                <Pagination></Pagination>
                <Customerservices></Customerservices>
                <Customerdocmessagetab></Customerdocmessagetab>
            </div>
    )
}
export default CustomerFindpet;