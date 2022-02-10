import React, { useState } from "react";
import NewEventForm from "../NewEventForm/NewEventForm";
import {Button} from "react-bootstrap";
import "./Header.css";

/** App header
 * 
 * - showForm: state to manage whether form should be showing
 * 
 * App -> Header -> NewEventForm
*/



function Header({addEvent}:any){
    console.log("Header")
    const [showForm, setShowForm] = useState(false);

    /** Closes form on call */
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
            <div className="header-title">
                <span className="month">
                    February 2022
                </span>
                <div className="add-event">
                    <Button variant="outline-primary" 
                            size="sm" 
                            onClick={() => setShowForm(true)} > 
                        Add Event 
                    </Button>
                </div>
            </div>
            {showForm && <NewEventForm 
                show={showForm} 
                addEvent={addEvent} 
                closeEvent={closeEvent}/>}
            <table className="weekday-banner">
                <tbody>
                    <tr>
                        {weekdays.map((day) => <td 
                            className="weekday" 
                            key={day}> {day} </td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Header;