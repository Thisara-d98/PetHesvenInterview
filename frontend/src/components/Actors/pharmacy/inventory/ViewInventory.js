import React from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import './ViewInventory.css';

function ViewInventory()
{
    return(
        <div>
            <NavbarUsers/>
            <section className="py-4 ">
            <div className="container">
                <div className="row bg-success text-white"> 
                    <div className="col-md-4 my-auto"></div>
                    <h3 className="text-center">Current Status of Inventory</h3>
                </div>
            </div>
            </section>
            
        {/* Medicine stock details started here    */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">Availability of Veterinary Medicine Stock</h5>
                <div className="underline mx-auto"></div>


                   {/* Search bar started here */}
                   <div class="searchbar-div" >
                    <form>
                        <div className="form-group mt-3">
                        <div className="card mb-4 ">
                            <div className="card-body bg-c-light">
                            <div className="row ml-4">

                        {/* Search box started here         */}
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="petsearchby-name" aria-describedby="petsearch" placeholder="Search Medicine by Medicine Name or ID"></input>
                            
                            </div>
                        {/* Search box ended here          */}

                        {/* Search button started here      */}
                            <div class="col-md-2">
                            <button type="submit" class="btn btn-success " id="petsearch-btn">Search <i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        {/* Search box ended here      */}

                        </div>
                            </div>
                            
                        </div>
                        
                        
                        </div>
                    </form>
                </div>
                {/* Search bar ended here */}

                <hr/>


                
                </div>

                {/* Stock details started here */}
                <div className="container mb-3">
                <div className="card shadow">
                <div className="card-body">
                    <table class="table table-striped table-hover">

                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Quantity(Units)</th>
                            <th scope="col">Unit Price(LKR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Cotrimaxazole 480 mg</td>
                            <td>623</td>
                            <td>420</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Metronidazole 400 mg</td>
                            <td>512</td>
                            <td>912</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Promethazine 10 mg</td>
                            <td>29</td>
                            <td>1440</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Ezo omeprazole 20 mg</td>
                            <td>57</td>
                            <td>960</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                {/* Stock details ended here */}

            </div>
                </div>
                
            </div>
            
        </section>
        {/* Medicine stock details ended here  */}   
        </div>
        
    );
}

export default ViewInventory;