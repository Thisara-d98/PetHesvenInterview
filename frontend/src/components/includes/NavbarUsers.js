import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from "../images/logo.png";

function NavbarUsers()
{

  return(

    <nav class="navbar navbar-expand-lg navbar-light bg-success bg-gradient ">
      
    <div class="container-fluid">
    <img src={Logo} width="75px" height="75px"  alt="Services"/>
        <a href="#" class="navbar-brand"><div class="a1">PetHeaven</div></a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                
                <Link to="/" class="nav-link active"><div class="b"><i class="fa-solid fa-house"></i> Home</div></Link>
                <Link to="/about" class="nav-link active"><div class="b"><i class="fa-solid fa-circle-info"></i> About Us</div></Link>
                <Link to="/contact" class="nav-link active"><div class="b"><i class="fa-solid fa-phone"></i> Contact Us</div></Link>
                <Link to="/Notifications" class="nav-link active"><div class="b"><i class="fa-solid fa-bell"></i> Notifications</div></Link>
                {/* <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
               </div>  */}
                
            </div>
            <div class="navbar-nav ms-auto">
            {/* <Link to="SignIn" class="nav-item nav-link"><div class="b"><i class="fa-solid fa-right-to-bracket"></i> Sign in</div></Link>   */}
            <Link to="SignUp" class="nav-item nav-link"><div class="b"><i class="fa-solid fa-user-gear"></i> Profile</div></Link> 
            <Link to="/SignIn" class="nav-item nav-link"><div class="b"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</div></Link> 
            </div>
        </div>
    </div>
</nav>

    // <div className="navbar-dark bg-dark shadow">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12">
    //           <nav class="navbar navbar-expand-lg bg-light">
    //             <div class="container-fluid">
    //               <Link to="/" class="navbar-brand">PetHeaven</Link>
    //               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //               </button>
    //               <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //                   <li class="nav-item">
    //                     <Link to="/" class="nav-link active">Home</Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link to="/about" class="nav-link active">About Us</Link>
    //                   </li>
    //                   <li class="nav-item">
    //                     <Link to="/contact" class="nav-link active">Contact Us</Link>
    //                   </li>
                      
    //                 </ul>
                    
    //               </div>
    //             </div>
    //           </nav>

    //       </div>
    //     </div>
    //   </div>
    // </div>

);

}

export default NavbarUsers;