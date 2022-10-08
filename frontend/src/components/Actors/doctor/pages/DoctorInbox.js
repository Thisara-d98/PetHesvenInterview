import React from "react";
import io from "socket.io-client";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/DoctorInbox.css';
import NavbarUsers from "../../../includes/NavbarUsers";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function DoctorInbox() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };




  const [users, setUser] = useState([])
  const [fullname, setName] = useState("");
  const [appointmentID, setappointmentID] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [room_name, setRoomName] = useState("");
  const [room_ID, setRoomID] = useState("");

  useEffect(() => {
      getUsers();
  }, [])

  function getUsers() {
      fetch("http://localhost:5000/Doctor/Inbox_Table").then((result) => {
          result.json().then((resp) => {
              // console.warn(resp)

              setUser(resp)
              setName(resp[0].fullname)
              setappointmentID(resp[0].appointmentID)
              setDate(resp[0].date)
              setTime(resp[0].time)
              setRoomName(resp[0].room_name)
              setRoomID(resp[0].room_ID)

          })
      })
  }


      

  const  Done = async (item) => {
    console.log("prasad")

    var raw = "";

     var requestOptions = {
          method: 'POST',
          body: raw,
          redirect: 'follow'
        };
      try {
          const body = { item };
          const appointment_ID= item.appointmentID ;
          const response = await fetch(
              `http://localhost:5000/Doctor/Done/${appointment_ID}`,
              requestOptions)
          ;
          console.log(response);
      }
      catch (err) {
          console.log(err);
      }

  }






  return (

    <div> <NavbarUsers />


         
<div>

<div class="adminviewtable">

    <table class="table view">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Appointment_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Room name</th>
                <th scope="col">Room ID</th>
                <th scope="col">Operation</th>
            </tr>
        </thead>
        <tbody>

            {
                users.map((item, i) =>
                    <tr key={i}>
                        <td>{item.appointmentID}</td>
                        <td>{item.fullname}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.room_name}</td>
                        <td>{item.room_ID}</td>
                        <td><button type="button" class="btn btn-warning" onClick={() => Done(item)}>Done</button></td>
                    </tr>
                )
            }


        </tbody>
    </table>
</div>
</div>










      {/* room id and room name */}
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>

    </div>
  );
}
export default DoctorInbox;

