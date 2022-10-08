
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import NavbarUsers from '../../../includes/NavbarUsers';
import '../css/Doctoravailable.css';

import API from "../../../services/baseURL";
import options from "../../../services/options";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// const events = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2021, 6, 0),
//         end: new Date(2021, 6, 0),
//     },
//     {
//         title: "Vacation",
//         start: new Date(2021, 6, 7),
//         end: new Date(2021, 6, 10),
//     },
//     {
//         title: "Conference",
//         start: new Date(2021, 6, 20),
//         end: new Date(2021, 6, 23),
//     },
// ];

function DoctorAvailability() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState();

    // function handleAddEvent() {
    //     setAllEvents([...allEvents, newEvent]);
    // }

 

    const handleAddEvent = e => {
        // e.preventDefault();
        console.log("Medicine List", newEvent);
        
        // const data = { Medicine: medicineList.Medicine, Quantity: medicineList.Quantity, Price: medicineList.Price};
        // const data = medicineList;
        // console.log("Data",data);
       
        
          // console.log("GGS")
          console.log(newEvent.title)
          const title = newEvent.title;
        const start = newEvent.start;
        const end = newEvent.end;
        setAllEvents([...allEvents, newEvent]);
        // console.log("Price",medicineList[0].Price);
       
        const response = API.post(`Doctor/Available`, {
          params: {
            title: title,
            start: start,
            end : end
          }
        }, options);
        console.log("Data ",response);
       
    }
    

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 400, margin: "50px" }} />
        </div>
    );
}

export default DoctorAvailability;



