import React, { useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";
import "./Header.css"

function Header(){
    console.log("Header")
    const [showForm, setShowForm] = useState(false);

    function addEvent(evt){
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
                <button className="addEvent" onClick={() => setShowForm(true)} className="addEventBtn"> 
                    Add Event 
                </button>
            </div>
            {showForm && <NewEventForm show={showForm} addEvent={addEvent}/>}
            <div className="weekdayBanner">
                {weekdays.map((day) => <span key={day}> {day} </span>)}
            </div>
        </div>
    );
}


export default Header;