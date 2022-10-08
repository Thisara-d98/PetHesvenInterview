import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

import '../css/AdminHeader.css';
function AdminHeader(){

    return(
     
      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img classs="img-responsive" width="100px" height="70px" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg">
    </img>
    </a>

        <a class="navbar-brand" href="#">PetHeaven</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">    
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link " aria-current="page" href="#"><i class="fa-solid fa-house"></i> Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/Notifications" class="nav-link" href="#"><i class="fa-solid fa-bell"></i> Notifications</Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-comment"></i>feedbacks & issues</a>
            </li> */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-user"></i>Profile
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Go to Profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    )
}

export default AdminHeader;