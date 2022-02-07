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
                <div className="addEvent">
                    <button  onClick={() => setShowForm(true)} > 
                        Add Event 
                    </button>
                </div>
            </div>
            {showForm && <NewEventForm show={showForm} addEvent={addEvent}/>}
            <table className="weekdayBanner">
                {weekdays.map((day) => <td className="weekday" key={day}> {day} </td>)}
            </table>
        </div>
    );
}


export default Header;