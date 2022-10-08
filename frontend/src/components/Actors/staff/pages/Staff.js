import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import '../css/Staff.css';


import pet from '../img/pet.png';
import adoptee from '../img/adoptee.jpeg';
import pets from '../img/pets.jpg';
import medical from '../img/medical.jpg';
import notify from '../img/notify.jpg';
import donate from '../img/donate.jpg';
import feedback from '../img/feedback.jpg';
import post from '../img/post.jpg';
import viewpost from '../img/viewpost.jpg';
import NavbarUsers from '../../../includes/NavbarUsers';

function Staff() {
  return (

    <div>
    <NavbarUsers/>
      <section className="section bg-c-light border-top">
        <div className="container stafftopmrgin">
          <div className="row ">
            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="viewpets" class="nav-link active">
                  <img src={pets} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body " id='cardTitle'>
                    <h6><b>VIEW PETS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="postpets" class="nav-link active">
                  <img src={post} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>POST PETS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="viewpost" class="nav-link active">
                  <img src={viewpost} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW POSTS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="viewadoptee" class="nav-link active">
                  <img src={adoptee} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW ADOPTEES</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="updatemedicalstatus" class="nav-link active">
                  <img src={medical} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>UPDATE MEDICAL STATUS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="notifyadopter" class="nav-link active">
                  <img src={notify} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>NOTIFY ADOPTER</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="viewdonation" class="nav-link active">
                  <img src={donate} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW DONATIONS</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="admincard col-md-3">
                       
              <div className="card shadow" id='cardone'>
                <Link to="viewfeedback" class="nav-link active">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    14+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                  <img src={feedback} className="card-img-top staffimg" alt="Services"/>
                  <div className="card-body" id='cardTitle'>
                    <h6><b>VIEW FEEDBACK</b></h6>
                    <div className="underline"></div>
                  </div>
                </Link>
              </div>
            </div>
                       
                        
          </div>
        </div>
      </section>
    </div>
  )
}

export default Staff