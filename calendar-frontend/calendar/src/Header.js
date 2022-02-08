import React, { useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";
import {Button} from "react-bootstrap";
import "./Header.css";
import CalendarApi from "./api";

function Header(){
    console.log("Header")
    const [showForm, setShowForm] = useState(false);

    function addEvent(formData){
        console.log(formData)
        setShowForm(false);
        CalendarApi.addEvent(formData);
    }

    function closeEvent(){
        setShowForm(false);
    }

    const weekdays = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];
    
    return (
        <div >
            <div className="Header-title">
                <span className="month">
                    February 2022
                </span>
                <div className="addEvent">
                    <Button variant="outline-primary" size="sm" onClick={() => setShowForm(true)} > 
                        Add Event 
                    </Button>
                </div>
            </div>
            {showForm && <NewEventForm show={showForm} addEvent={addEvent} closeEvent={closeEvent}/>}
            <table className="weekdayBanner">
                <tbody>
                    <tr>
                        {weekdays.map((day) => <td className="weekday" key={day}> {day} </td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Header;