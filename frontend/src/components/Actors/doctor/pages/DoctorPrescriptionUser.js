import React from "react";
import { useEffect, useState } from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/DoctorPrescriptionUser.css';


function DoctorPrescriptionUser()
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
  
       

        {/* Repeat Prescription Form started here */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">Repeat Prescription Form</h5>
                <h6 class="slmc" className="text-center">Check availability to confirm the order</h6>
                <div className="underline mx-auto"></div>
           
                <div className="form-field">
        <label htmlFor="service">Medicine List</label>

        {/* Medicine input field started here */}
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
             

                {/* Medicine input parts started here */}
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
                {/* Medicine input parts ended here */}
                    
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
        {/* Medicine input field ended here */}

      </div>
      
      

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
        {/* Repeat Prescription Form ended here */}
        
      

        
        </div>
    );
}

export default DoctorPrescriptionUser;