import React, { useState, useEffect } from "react";
import NewEventForm from "./NewEventForm";

function Header(){
    console.log("Header")
    const [showForm, setShowForm] = useState(false);

    function addEvent(){
        setShowForm(false);
    }
    return (
        <div>
            <h4>
                February 2022
            </h4>
            <button onClick={() => setShowForm(true)}> Add Event </button>
            {showForm && <NewEventForm show={showForm} addEvent={addEvent}/>}
        </div>
    );
}


export default Header;