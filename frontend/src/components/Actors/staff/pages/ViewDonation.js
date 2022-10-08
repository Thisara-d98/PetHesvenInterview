import React,{useState, useEffect} from 'react';
import {Link, Search} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/ViewDonation.css';



import dog from '../img/dog.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function ViewDonation(){
    const [donations,setDonations]=useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/staffmember/viewdonation").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          setDonations(resp)
          console.log(resp);
        })
      })
    },[])
    console.warn(donations)
    console.log(donations)
    return(
        <div>
        <NavbarUsers/>
        <section className="section bg-c-light border-top">
            <h3 class="pageTitle">Donations <i class="fa-solid fa-paw"></i></h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <div class="card card-body donationcard">
                      <h5 class="card-title">Received Donations</h5>
                      <h6 class="card-subtitle mb-2 text-muted">24 / 07 / 2020</h6>
                      <p class="card-text donationtext">Today's Total Amount of Donations = Rs. 101000.00</p>
                    </div>
                  </div>
                </div>
                <div class="row donationsearch">
                    <div class="col">
                        <div className="search">
                            <input class="searchTerm" type="text" placeholder=" Search here..." name="search"/>
                            <button class="searchButton" type="submit"><i class="fa-solid fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
          <div className="container donationTable">
            <div className="row ">
              {/* <table class="table  table-stripped table-hover"> */}
              <table class="table table-stripped table-hover">
                <thead>
                  <tr className='text-center'>

                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Amount(Rs)</th>
                  </tr>
                </thead>

                <tbody>
    
                {
                        donations.map((item,i)=>
                          <tr key={i}>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                          <td>{item.donater}</td>
                          <td>{item.contact}</td>
                          <td>{item.amount}</td>
                        </tr>
                        )
                      }


                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>   
    )
}

export default ViewDonation;