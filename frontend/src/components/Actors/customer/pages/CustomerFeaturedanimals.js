// import React,{useState} from 'react';
// import {Link} from 'react-router-dom';
// import puppy1 from '../images/puppy1.jfif';
// import puppy2 from '../images/puppy2.jfif';
// import kitty1 from '../images/kitties1.jfif';
// import bulldog from '../images/Bulldogpuppies.jpg';
// import puppy4 from '../images/puppy4.jpg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

// import '../css/CustomerFeaturedAnimals.css';
// function CustomerFeaturedAnimals(){
//     return(
//             <div class= "container">
//                 <h3 class="featuredanimalsheader">Featured Pets <i class="fa-solid fa-paw"></i></h3>
                
                
//                     <div class="row cardbody featuredanimalarea" > 
//                         <div class="col-md-3 card"  id="card1" >
                            
//                                 <img src={puppy2} class="card-img-top" id="featuredimg" alt="Tommy"></img>
//                                 <div class="card-body">
//                                     <p class="card-text"></p>
//                                     <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
//                                 </div>
//                         </div>

//                         <div class="col-md-3 card" id="card1">
//                             <img src={puppy1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
//                             <div class="card-body">
//                                 <p class="card-text"></p>
//                                 <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                                
//                             </div>
//                         </div>

//                         <div class="col-md-3 card" id="card1">
//                             <img src={kitty1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
//                             <div class="card-body">
//                                 <p class="card-text"></p>
//                                 <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
//                             </div>
  
//                         </div>

//                         <div class="col-md-3 card" id="card1">
//                             <img src={bulldog} class="card-img-top" id="featuredimg" alt="Tommy"></img>
//                             <div class="card-body">
//                                 <p class="card-text"></p>
//                                 <button type="button" class="btn btn-success " id="adoptbtn">Adopt pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
//                             </div>
  
//                         </div>
//                 </div>
   
//             </div>
//         )
// }

// export default CustomerFeaturedAnimals;

import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import kitty1 from '../images/kitties1.jfif';
import bulldog from '../images/Bulldogpuppies.jpg';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import '../css/CustomerFeaturedAnimals.css';
function CustomerFeaturedanimals(){
    return(
            <div class= "container">
                <h3 class="featuredanimalsheader">Pets you may interested  <i class="fa-solid fa-paw"></i></h3>
                    <div class="row cardbody featuredanimalarea" > 
                        <div class="col-md-2 card"  id="card1" >
                                <h4 class="text-success petname">Tommy</h4>
                                <div className="underline underlineJusty"></div>
                                <img src={puppy2} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                                <div class="petage card-body">
                                <h6 class="text-danger">2 months</h6>
                                <h6 class="text-dark">Black</h6>
                                    <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">view pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                                </div>
                        </div>

                        <div class="col-md-2 card" id="card1">
                            <h4 class="text-success petname">Jill</h4>
                            <div className="underline underline Justify"></div>
                            <img src={puppy1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Mixed</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-md-2 card" id="card1">
                            <h4 class="text-success petname">Nika</h4>
                            <div className="underline underline Justify"></div>
                            <img src={kitty1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Brown</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">view pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-md-2 card" id="card1">
                            <h4 class="text-success petname">Pachii</h4>
                            <div className="underline underline Justify"></div>
                            <img src={bulldog} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Mixed</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadopthbtn">view pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h4 class="text-success petname">Ocky</h4>
                            <div className="underline underline Justify"></div>
                            <img src={puppy1} class="card-img-top"  id="featuredimg" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Mixed</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">View pet <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>

                        <div class="col-12 col-md-2 card">
                            <h4 class="text-success petname">Phil</h4>
                            <div className="underline Justify"></div>
                            <img src={kitties1} class="card-img-top" id="featuredimg" alt="Tommy"></img>
                            <div class="petage card-body">
                            <h6 class="text-danger">2 months</h6>
                            <h6 class="text-dark">Brown</h6>
                                <Link to="viewpetdetails"><button type="button" class="btn btn-success" id="petadoptbtn">view pet<i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
                            </div>
                        </div>
                </div>
   
            </div>
        )
}

export default CustomerFeaturedanimals;