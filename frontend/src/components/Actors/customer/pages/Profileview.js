
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import kitty1 from '../images/kitties1.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  

import profile from '../images/profile.png';
import '../css/profileview.css';

function Profileview(){
    return(
        <div>
            <div class="card" id="profileviewcard">
                <div class="row">
                    <div class="col col-sm-3 column">
                        <img src={profile} ></img>
                    </div>

                    <div class="col col-sm-9 column">
                        <div class="card-body">
                            <table class="table" id="profiletable">
                                
                                <tbody>
                                    <tr>
                                        <th id="profilelabel">Your Name</th>
                                        <td id="profileitem">A.B Silva</td>
                                        
                                    </tr>
                                    <tr>
                                        <th id="profilelabel">User Name</th>
                                        <td id="profileitem">ABsilva@69</td>
                                        
                                    </tr>
                                    <tr>
                                        <th id="profilelabel">Telephone number</th>
                                        <td id="profileitem">011-2347890</td>
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
    )
}

export default Profileview;