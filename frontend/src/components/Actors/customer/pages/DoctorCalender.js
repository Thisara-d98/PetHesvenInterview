
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import puppy1 from '../images/puppy1.jfif';
import puppy2 from '../images/puppy2.jfif';
import puppy4 from '../images/puppy4.jpg';
import kitties1 from '../images/kitties1.jfif';
import kitties3 from '../images/kitties3.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import NavbarUsers from '../../../includes/NavbarUsers';
import '../css/Doctorcalender.css';
function DoctorCalender(){
    return (
        <div>  
            <NavbarUsers/>
            <div class="container py-5">
            <header class="text-center text-white mb-5">
                <h1 class="display-4">Bootstrap Calendar</h1>
            </header>

            <div class="calendar shadow bg-white p-5">
            <div class="d-flex align-items-center"><i class="fa fa-calendar fa-3x mr-3"></i>
                <h2 class="month font-weight-bold mb-0 text-uppercase">August 2022</h2>
            </div>
            <p class="font-italic text-muted mb-5">No events for this day.</p>
            <ol class="day-names list-unstyled">
                <li class="font-weight-bold text-uppercase">Sun</li>
                <li class="font-weight-bold text-uppercase">Mon</li>
                <li class="font-weight-bold text-uppercase">Tue</li>
                <li class="font-weight-bold text-uppercase">Wed</li>
                <li class="font-weight-bold text-uppercase">Thu</li>
                <li class="font-weight-bold text-uppercase">Fri</li>
                <li class="font-weight-bold text-uppercase">Sat</li>
            </ol>

  <ol class="days list-unstyled">
    <li>
      <div class="date">1</div>
      <div class="event bg-success">Channel Mr.Silva</div>
    </li>
    <li>
      <div class="date">2</div>
    </li>
    <li>
      <div class="date">3</div>
    </li>
    <li>
      <div class="date">4</div>
    </li>
    <li>
      <div class="date">5</div>
    </li>
    <li>
      <div class="date">6</div>
    </li>
    <li>
      <div class="date">7</div>
    </li>
    <li>
      <div class="date">8</div>
    </li>
    <li>
      <div class="date">9</div>
    </li>
    <li>
      <div class="date">10</div>
    </li>
    <li>
      <div class="date">11</div>
    </li>
    <li>
      <div class="date">12</div>
    </li>
    <li>
      <div class="date">13</div>
      <div class="event all-day begin span-2 bg-warning">Holiday</div>
    </li>
    <li>
      <div class="date">14</div>
    </li>
    <li>
      <div class="date">15</div>
      <div class="event all-day end bg-success">Work in office</div>
    </li>
    <li>
      <div class="date">16</div>
    </li>
    <li>
      <div class="date">17</div>
    </li>
    <li>
      <div class="date">18</div>
    </li>
    <li>
      <div class="date">19</div>
    </li>
    <li>
      <div class="date">20</div>
    </li>
    <li>
      <div class="date">21</div>
      <div class="event bg-primary">Channel with Ms Kaushi</div>
      <div class="event bg-success">Pet  owner counceling</div>
    </li>
    <li>
      <div class="date">22</div>
      <div class="event bg-info">Patient meeting at hospital</div>
    </li>
    <li>
      <div class="date">23</div>
    </li>
    <li>
      <div class="date">24</div>
    </li>
    <li>
      <div class="date">25</div>
    </li>
    <li>
      <div class="date">26</div>
    </li>
    <li>
      <div class="date">27</div>
    </li>
    <li>
      <div class="date">28</div>
    </li>
    <li>
      <div class="date">29</div>
    </li>
    <li>
      <div class="date">30</div>
    </li>
    <li>
      <div class="date">31</div>
    </li>
    <li class="outside">
      <div class="date">1</div>
    </li>
    <li class="outside">
      <div class="date">2</div>
    </li>
    <li class="outside">
      <div class="date">3</div>
    </li>
    <li class="outside">
      <div class="date">4</div>
    </li>
  </ol>
</div>
</div>
        </div>
    )
}

export default DoctorCalender; 