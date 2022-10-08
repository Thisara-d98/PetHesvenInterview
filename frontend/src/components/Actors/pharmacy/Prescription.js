import React from "react";
import { useEffect, useState } from "react";
import NavbarUsers from "../../includes/NavbarUsers";
import './Prescription.css';


function Prescription()
{
    // Adding medicine functions started here
    const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
//   Adding medicine functions ended here

// Confirm and send buttons started here
  const[show,setShow]=useState(false);
  const[showBill,setShowBill]=useState(false);
// Confirm and send buttons ended here 

    return(
        <div>
            <NavbarUsers/>
            {/* Medical Prescription topic started here */}
            <section className="py-4 ">
                <div className="container">
                    <div className="row bg-success text-white"> 
                        <div className="col-md-4 my-auto"></div>
                        <h3 className="text-center">Medical Prescription</h3>
                    </div>
                </div>
            </section>
            {/* Medical Prescription topic ended here */}

        {/* Veterinary doctor details started here    */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h4 className="main-heading">Dr. Amal Silva <sub>BVSc(Pera)</sub></h4>
                <div className="underline"></div>
                <h6 class="slmc">Veterinary Consultant</h6>
                <h6 class="slmc">SLMC - 13245</h6>
                <hr/>

                {/* pet details started here */}
                <p class="para">
                    Pet Name : Shaggy
                  
                </p>
                <p class="para">
                    
                    Age : 6 months
                    
                </p>
                <p class="para">
                    Weight : 4 kg
                </p>
                {/* pet details ended here */}
                </div>

                {/* prescription details started here */}
                <div className="container mb-3">
                <div className="card shadow">
                <div className="card-body">
                    <table class="table table-striped table-hover">

                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Dosage</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Current Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Cotrimaxazole 480 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            <td>489</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Metronidazole 400 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            <td>237</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Promethazine 10 mg</td>
                            <td>1.5 tab bd</td>
                            <td>5/365</td>
                            <td>328</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Ezo omeprazole 20 mg</td>
                            <td>1 tab bd</td>
                            <td>5/365</td>
                            <td>489</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                {/* prescription details ended here */}

                {/* Confirm and reject buttons started here */}
      <div className="form-group py-3 row ">
            <div className="col-md-6">
                <button onClick={()=>setShowBill(true)} type="button" id="submit-btn" className="btn shadow w-100 ">Confirm</button>
            </div>
            <div className="col-md-6">
                <button onClick={()=>setShow(true)} type="button" id="reject-btn" className="btn shadow w-100 ">Reject</button>
            </div>
      </div>
    {/* Confirm and reject buttons started here */}

            </div>
                </div>
                
            </div>
            
        </section>
        {/* Veterinary doctor details ended here  */}

        {/* Repeat Prescription Form started here */}
        {/* <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">Repeat Prescription Form</h5>
                <h6 class="slmc" className="text-center">Check availability to confirm the order</h6>
                <div className="underline mx-auto"></div>
            
                <div className="form-group">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-6">
                    <label for="option" class="form-label">Medicine</label>
                    <select class="form-control" id="inputGroupSelect02">
                        <option selected>Select prescribed medicine</option>
                        <option value="1">Cotrimaxazole 480 mg</option>
                        <option value="2">Metronidazole 400 mg</option>
                        <option value="3">Promethazine 10 mg</option>
                        <option value="4">Ezo omeprazole 20 mg</option>
                        <option value="5">Metronidazole 200 mg</option>
                    </select>
                    
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Quantity</label>
                            <input type="text" className="form-control" placeholder="Enter quantity of medicine"></input>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Available Quantity</label>
                            <input type="text" className="form-control" ></input>
                        </div>
                    </div>
                </div>
                    </div>
                     
                </div>
                    
                    
                </div>
                <div className="form-field">
        <label htmlFor="service">Medicine List</label>

        Medicine input field started here
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />

                Medicine input parts started here
               <div className="form-group">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-6">
                    <label for="option" class="form-label">Medicine</label>
                    <select class="form-control" id="inputGroupSelect02">
                        <option selected>Select prescribed medicine</option>
                        <option value="1">Cotrimaxazole 480 mg</option>
                        <option value="2">Metronidazole 400 mg</option>
                        <option value="3">Promethazine 10 mg</option>
                        <option value="4">Ezo omeprazole 20 mg</option>
                        <option value="5">Metronidazole 200 mg</option>
                    </select>
                    
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Quantity</label>
                            <input type="text" className="form-control" placeholder="Enter quantity of medicine"></input>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Available Quantity</label>
                            <input type="text" className="form-control" ></input>
                        </div>
                    </div>
                </div>
                    </div>
                     
                </div>
                Medicine input parts ended here
                    
                </div>

              {serviceList.length - 1 === index && serviceList.length < 6 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>+Add a Medicine</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
        Medicine input field ended here

      </div>
      <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
      

      Confirm and reject buttons started here
      <div className="form-group py-3 row ">
            <div className="col-md-6">
                <button onClick={()=>setShowBill(true)} type="button" id="submit-btn" className="btn shadow w-100 ">Confirm</button>
            </div>
            <div className="col-md-6">
                <button onClick={()=>setShow(true)} type="button" id="reject-btn" className="btn shadow w-100 ">Reject</button>
            </div>
      </div>
    Confirm and reject buttons started here

            
                </div>
                
                </div>
        
                
                <form className="Prescription" autoComplete="off">
                    <div className="form-field">
                        <label htmlFor="service">
                            service
                        </label>
                        <div className="services">
                            <div className="first-devision">
                                <input name="service" type="text" id="service" required/>
                                <button type="button" className="add-btn">
                                    <span>+Add a service</span>
                                </button>
                            </div>
                            <div className="second-devision">
                                <button type="button" className="remove-btn">
                                    <span>Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="output">
                        <h2>Out put</h2>
                    </div>
                </form>
                
            </div>
            
        </section> */}
        {/* Repeat Prescription Form ended here */}
        
        {/* Reject order message started here */}
        <section className="section bg-c-light">
        {show?
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h4 className="main-heading">Aradhana Veterinary Pharmacy</h4>
                <div className="underline"></div>
                <h6 class="slmc">Regiter No - 23587</h6>
                <hr/>
                <p class="para">
                    Your Prescription is <b>Rejected</b>. Because some medicines are out of stock. 
                </p>
                <p class="para">
                    Thank You!
                </p>
                <hr/>
                <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn" className="btn shadow w-100 ">Send</button>
            </div>
            <div className="col-md-2">
                <button onClick={()=>setShow(false)} type="button" id="reject-btn" className="btn shadow w-100 ">Discard</button>
            </div>
            </div>
                </div>
                </div>
            </div>:null
} 
        </section>
        {/* Reject order message ended here */}

        {/* Accept order message started here */}
        <section className="section bg-c-light border-bottom">
        {showBill?
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h4 className="main-heading">Aradhana Veterinary Pharmacy</h4>
                <div className="underline"></div>
                <h6 class="slmc">Regiter No - 23587</h6>
                <hr/>
                <p class="para">
                    Your Prescription is <b>Accepted</b>.
                </p>
                <table class="table table-striped table-hover">

                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Medicine Name</th>
                            <th scope="col">Unit Price(LKR)</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price(LKR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Cotrimaxazole 480 mg</td>
                            <td>35</td>
                            <td>12</td>
                            <td>420</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Metronidazole 400 mg</td>
                            <td>76</td>
                            <td>12</td>
                            <td>912</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Promethazine 10 mg</td>
                            <td>120</td>
                            <td>12</td>
                            <td>1440</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Ezo omeprazole 20 mg</td>
                            <td>80</td>
                            <td>12</td>
                            <td>960</td>
                            </tr>
                            <tr>
                            <th scope="row"></th>
                            <td colSpan="3"><b>Total Amount</b></td>
                            <td>3732</td>
                            </tr>
                        </tbody>
                    </table>
                <p class="para">
                    Total amount is <b>3732 LKR</b>. To continue your prescription pay relavant amount online. 
                </p>
                <p class="para">
                    Thank You!
                </p>
                <hr/>
                <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn" className="btn shadow w-100 ">Send</button>
            </div>
            <div className="col-md-2">
                <button onClick={()=>setShowBill(false)} type="button" id="reject-btn" className="btn shadow w-100 ">Discard</button>
            </div>
            </div>
                </div>
                </div>
            </div>:null
} 
        </section>
        {/* Accept order message ended here */}

        
        </div>
    );
}

export default Prescription;