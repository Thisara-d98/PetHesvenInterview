import React,{useEffect,useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";
import '../css/AdminView.css';

function AdminView() {


  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/Admin/View").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)

    return (
     
        <div>
           <NavbarUsers/>
        <div className="subHeader">
        <div className="topic">VIEW USER ACCOUNT</div>
        </div>
         
         <div class="adminviewtable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">User Type</th>
    </tr>
  </thead>
  <tbody>
    
  {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.User_ID}</td>
          <td>{item.User_name}</td>
          <td>{item.Email}</td>
            <td>{item.User_type}</td>
          </tr>
          )
        }


  </tbody>
</table>


         </div>
        
      </div>
     
    );
  }
  
  export default AdminView;