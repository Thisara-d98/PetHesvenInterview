import React,{useState} from "react";
import { useRef, useEffect } from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/ViewComplains.css';

function ViewComplains() {
  const [users, setUser] = useState([])
    const [User_name, setName] = useState("");
    const [complains, setComplains] = useState("");
    const [User_type, setuserType] = useState("");
    const [Message, setMessage] = useState("");
    const [complain_ID, setComplainId] = useState(null)

    const [buttontext, setButtontext] = useState('Send message to user');
  


  useEffect(() => {
    getUsers();
}, [])

function getUsers() {
    fetch("http://localhost:5000/Admin/ComplainsView").then((result) => {
        result.json().then((resp) => {
            // console.warn(resp)

            setUser(resp)
            setComplainId(resp[0].complain_ID)
            setName(resp[0].User_name)
            setuserType(resp[0].User_type)
            setComplains(resp[0].complains)

  

        })
    })
}

console.warn(users)
function UpdateUser(item) {
    console.log(item)
    setComplainId(item.complain_ID)
    setName(item.User_name)
    setuserType(item.User_type)
    setComplains(item.complains)

}


const fixError_form = async e => {
  e.preventDefault();
  setButtontext('Done...');
  try {
      const body = { Message,complain_ID};
      const response = await fetch(
          "http://localhost:5000/Admin/FixError",
          {
              method: "POST",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(body)
          }
      );
      console.log(response);
  }
  catch (err) {
      console.log("Falil12");
  }

}





  
const[searchTerm, setSearchTerm]=useState('')
    return (
  
      <div>
      <NavbarUsers />


       {/* search */}
       <div class="container">

  <div class="row height d-flex justify-content-center align-items-center">

    <div class="col-md-6">

      <div class="form">
        <i class="fa fa-search"></i>
        <input type="text" class="form-control form-input" placeholder="Search Name or Complain..." onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <span class="left-pan"><i class="fa fa-microphone"></i></span>
      </div>
      
    </div>
    
  </div>
  
</div>



      {/* table */}


      <div>

          <div class="adminviewtable">

              <table class="table view">
                  <thead class="thead-dark">
                      <tr>
                          <th scope="col">Complaint ID</th>
                          <th scope="col">Name</th>
                          <th scope="col">User Type</th>
                          <th scope="col">Complains</th>
                          <th scope="col">Operation</th>
                      </tr>
                  </thead>
                  <tbody>

                      {
                          users.filter((item)=>{
                              if(searchTerm == ""){
                                  return item
                              }else if (item.User_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.User_type.toLowerCase().includes(searchTerm.toLowerCase())){
                                  return item
                              }
                          }).map((item, i) =>
                              <tr key={i}>
                                  <td>{item.complain_ID}</td>
                                  <td>{item.User_name}</td>
                                  <td>{item.User_type}</td>
                                  <td>{item.complains}</td>
                                  <td><button type="button" class="btn btn-warning" onClick={() => UpdateUser(item)}>Fix Error</button></td>
                       
                              </tr>
                          )
                      }


                  </tbody>
              </table>      
      </div>
      </div>
    




<div class="row m-md-5 m-3 ">
        
        <div class="lg-4 bg-red py-5 px-5">
            <form action="">
                <h4 class="text-center text-white mb-4">Fix User complaints</h4>
                <div class="row">
                    <div class="col-md-6 col-12 my-md-0 my-2">
                        <input type="text" class="form-control bg-darkred "   value={complain_ID} onChange={(e)=>{setComplainId(e.target.value)}} placeholder="customer Name"/>
                    </div>
                    <div class="col-md-6 col-12 my-md-0 my-2 ">
                        <input type="email" class="form-control bg-darkred"  value={User_name} onChange={(e)=>{setName(e.target.value)}} placeholder="customer Email"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={User_type} onChange={(e)=>{setuserType(e.target.value)}} placeholder="customer Phone Number"/>
                    </div>
                    <div class="col-md-6 col-12 my-2">
                        <input type="text" class="form-control bg-darkred"  value={complains} onChange={(e)=>{setComplains(e.target.value)}} placeholder="Service Type"/>
                    </div>
                    <div class="">
                        <textarea cols="10" rows="3" value={Message} onChange={(e)=>{setMessage(e.target.value)}} class="form-control bg-darkred shadow-none"
                            placeholder="Message"/>
                    </div>
                    <div class=" my-2"> <button class="btn w-100 shadow-none text-uppercase msg-btn" onClick={fixError_form} >{buttontext}</button> </div>

                </div>
            </form>
        </div>

</div>
</div>


      
     
    );
  }
  
  export default ViewComplains;