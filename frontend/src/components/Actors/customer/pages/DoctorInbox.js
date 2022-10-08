import React from "react";
import io from "socket.io-client";
import { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../../doctor/css/DoctorInbox.css';
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




  return (

    <div> <NavbarUsers />



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

