import React,{useState, useEffect} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../css/ViewPost.css';


import dog from '../img/dog.jpg';
import dog2 from '../img/d4.jpg';
import dog3 from '../img/d3.jpg';
import dog5 from '../img/d5.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function ViewPost(){

    const [posts,setPosts]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewposts").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setPosts(resp)
          console.log(resp);
        })
      })
    },[])
    console.warn(posts)
    console.log(posts)

    return(
        <div>
        <NavbarUsers/>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Pet Posts <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="searchposts">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>
                    <div class="col toggleBtn">
                        <label className="switch">
                            <input type="checkbox" checked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
          <div className="container">
            <div className="row">
                {posts.map((item,i)=>
                    <div class="admincard col-md-3">     
                    <div className="card shadow cardpadding" id='cardone'>
                        <img src={dog} className="card-img-top petcardimg" alt="Services"/>
                        <div className="card-body" id='cardTitle'>
                        <div className="petdetail">
                            <h6 className="petName"><b>{item.name}</b></h6>
                            <div className="underline underlineJusty"></div>
                            <h6 >{item.breed}</h6>
                            <h6 >{item.gender}</h6>
                            <h6 >{item.age}</h6>
                            <h6 >{item.color}</h6>
                            <h6>{item.about}</h6>
                        </div>  
                        
                        </div>
                        <button type="button" class="btn btn-success deleteBtn" id="postpetbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete Post <i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                
                )}

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
                                        <label className="mb-1 mt-1"><b>Are you sure to Delete ?</b></label>
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
    )
}

export default ViewPost;