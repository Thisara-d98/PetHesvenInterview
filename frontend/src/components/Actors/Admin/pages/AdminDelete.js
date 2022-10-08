import React,{useEffect,useState} from "react";
import NavbarUsers from "../../../includes/NavbarUsers";

import '../css/AdminView.css';

function AdminDelete() {


 
  const [users, setUser] = useState([])
  const [User_name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [User_type, setuserType] = useState("");
  const [User_ID,setUserId]=useState(null)




  useEffect(()=>{
   getUsers();
  },[])
  
  function getUsers(){
    fetch("http://localhost:5000/Admin/View").then((result)=>{
        result.json().then((resp)=>{
          // console.warn(resp)
          
          setUser(resp)
          setName(resp[0].User_name)
          setuserType(resp[0].User_type)
          setEmail(resp[0].Email)
          setUserId(resp[0].User_ID)

        })
      })
  }

console.warn(users)
function UpdateUser(User_ID)
{
    // let item=users[User_ID-1];
    // setUserId(item.User_ID)
    // setName(item.User_name)
    // setEmail(item.Email)
    // setuserType(item.User_type)
       
}



  
    return (
     
        <div>
            <NavbarUsers />
         
         <div class="adminviewtable">

         <table class="table view">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">User Type</th>
      <th scope="col">Operation</th>
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
            <td><button type="button" class="btn btn-danger" onClick={()=>UpdateUser(item.User_ID)}>Delete</button></td>
          </tr>
          )
        }


  </tbody>
</table>

</div>
</div>



         
     
    );
  }
  
  export default AdminDelete;