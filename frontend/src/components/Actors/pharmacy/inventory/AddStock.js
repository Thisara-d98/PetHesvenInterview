import React from "react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import './AddStock.css';
import Axios from 'axios';
import NavbarUsers from "../../../includes/NavbarUsers";
import API from "../../../services/baseURL";
import options from "../../../services/options";
// import { v4 as uuidv4 } from 'uuid';

// index: uuidv4(),
function AddStock()
{
     // Adding medicine functions started here
     const [medicineList, setMedicineList] = useState([{ Medicine: '' ,Quantity: '',Price: '' },]);

     const handleServiceChange = (e, index) => {
       const { name, value } = e.target;
       const list = [...medicineList];
       list[index][name] = value;
       setMedicineList(list);
     };

    // const handleServiceChange = (index, e) => {
    //   const newMedicineList = medicineList.map(i => {
    //     if(index === i.index) {
    //       i[e.target.name] = e.target.value
    //     }
    //     return i;
    //   })
      
    //   setMedicineList(newMedicineList);
    // }
   
     const handleServiceRemove = (index) => {
       const list = [...medicineList];
       list.splice(index, 1);
       setMedicineList(list);
     };

    //  const handleServiceRemove = id => {
    //   const values  = [...inputFields];
    //   values.splice(values.findIndex(value => value.id === id), 1);
    //   setInputFields(values);
    // }
   
     const handleServiceAdd = () => {
      setMedicineList([...medicineList, {Medicine: '' ,Quantity: '',Price: '' }]);
     };
   //   Adding medicine functions ended here

 

  const HandleStock = e => {
    e.preventDefault();
    console.log("Medicine List", medicineList);
    
    // const data = { Medicine: medicineList.Medicine, Quantity: medicineList.Quantity, Price: medicineList.Price};
    // const data = medicineList;
    // console.log("Data",data);

    medicineList.map((item,index)=>{
      // console.log("GGS")
      console.log(item)
      const Medicine = item.Medicine;
    const Quantity = item.Quantity;
    const Price = item.Price;
    // console.log("Price",medicineList[0].Price);
    const response = API.post(`pharmacy/inventory/AddStock`, {
      params: {
        Medicine: Medicine,
        Quantity: Quantity,
        Price : Price
      }
    }, options);
    console.log("Data ",response);
    })
    


//     Axios.post("http://localhost:5000/pharmacy/inventory/AddStock",
//       {
//         params:{
//           Medicine: Medicine,
//           Quantity: Quantity,
//            Price: Price
//         }
//       }
// )
//                 .then((response) => {
//                     console.log(response.data)
                    
//                   if(response.data.error) {
//                     alert(response.data.error);}
//                   else{
//                     alert("successfully added");
//                   }
                           
//                 });
  //   try {
  //     const body = { medicineList};
  //     const response = await fetch(
  //         "http://localhost:5000/pharmacy/inventory/AddStock",
  //         {
  //             method: "POST",
  //             headers: {
  //                 "Content-type": "application/json"
  //             },
  //             body: JSON.stringify(body)
  //         }
  //     );
  //     console.log(response);
  // }
  // catch (err) {
  //     console.log("Falil12");
  // }

  };
 
 

//    const HandleStock = (e) => {
//     e.preventDefault()
//     const data = { Medicine: Medicine, Quantity: Quantity, Price: Price};
//     console.log(data);
//     Axios.post("http://localhost:5000/pharmacy/inventory/AddStock", {

//                   Medicine: Medicine,
//                   Quantity: Quantity,
//                   Price: Price
//                 })
//                 .then((response) => {
//                     console.log(response.data)
                    
//                   if(response.data.error) {
//                     alert(response.data.error);}
//                   else{
//                     alert("successfully added");
//                   }
                           
//                 });
                  
// };


    return(
        <div>
          <NavbarUsers/>
          {/* Inventory topic started here */}
        <section className="py-4 ">
        <div className="container">
            <div className="row bg-success text-white"> 
                <div className="col-md-4 my-auto"></div>
                <h3 className="text-center">Inventory</h3>
            </div>
        </div>
        </section>
        {/* Inventory topic ended here */}

        {/* New Stock Adding Form started here */}
        <section className="section bg-c-light border-bottom">
            <div className="container">
                <div className="card shadow">
                <div className="card-body">
                <h5 className="main-heading text-center">New Stock Adding Form</h5>
                <div className="underline mx-auto"></div>
                <form id="AddStockForm">
                               
                <div className="form-field">
        <label htmlFor="medicine">Medicine List</label>

        
        {/* Medicine input field started here */}
        {medicineList.map((medicineInput,index) => (
          
          <div key={index} className="services">
            <div className="first-division">
              
                {/* Medicine input parts started here */}
               <div className="form-group">
                <div className="card">
                    <div className="card-body bg-c-light">
                    <div className="row ">
                <div class="col-md-6">
                    <label for="option" class="form-label">Medicine</label>
                    <select class="form-control" value={medicineInput.Medicine} onChange={(e)=>handleServiceChange(e,index)} name="Medicine" id="inputGroupSelect02">
                        <option selected>Select medicine to be added</option>
                        <option value="Cotrimaxazole 480 mg">Cotrimaxazole 480 mg</option>
                        <option value="Metronidazole 400 mg">Metronidazole 400 mg</option>
                        <option value="Promethazine 10 mg">Promethazine 10 mg</option>
                        <option value="Ezo omeprazole 20 mg">Ezo omeprazole 20 mg</option>
                        <option value="Metronidazole 200 mg">Metronidazole 200 mg</option>
                    </select>
                    
                  
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Quantity</label>
                            <input type="text" className="form-control" value={medicineInput.Quantity} name="Quantity"
                             onChange={(e)=>handleServiceChange(e,index)}  placeholder="Enter newly added quantity"></input>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className="form-group">
                            <label className="mb-1">Unit Price</label>
                            <input type="text" className="form-control" value={medicineInput.Price} name="Price"
                             onChange={(e)=>handleServiceChange(e,index)}  placeholder="Enter unit price"></input>
                        </div>
                    </div>
                </div>
                    </div>
                     
                </div>
                {/* Medicine input parts ended here */}
                    
                </div>
              
              {medicineList.length - 1 ==index && medicineList.length < 8 && (
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
            
              {medicineList.length > 1 && (
                <button
                //   disabled={medicineList.length === 1}
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
     
      
      

      {/* Submit and View current availability buttons started here */}
      <div className="form-group py-3 row ">
            <div className="col-md-2">
                <button type="button" id="submit-btn" onClick={HandleStock}  className="btn shadow w-100 ">Submit</button>
            </div>
            <div className="col-md-3">
            <Link to="/pharmacy/inventory/ViewInventory" class="nav-link active">
                <button type="button" id="view-btn" className="btn shadow w-100 ">View current availability</button>
            </Link>
            </div>
      </div>
    {/* Submit and View current availability buttons started here */}

            </form>
                </div>
                
                </div>
        
                        
            </div>
            
        </section>
        {/* New Stock Adding Form ended here */}
    </div>
    )
}

export default AddStock;