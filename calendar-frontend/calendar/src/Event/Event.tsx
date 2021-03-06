import React, { useState } from "react";
import {Button} from "react-bootstrap";
import { EventData } from "../api";
import "./Event.css";


/** Event in date cell
 * 
 * - showEvent: state to manage whether full event modal should be showing
 * 
 *  DayCell -> Event
*/

interface EventProps {
    date: EventData;
    deleteEvent: any;
}

function Event({date, deleteEvent}: EventProps){
    console.log("Event")
    const [showEvent, setShowEvent] = useState(false)

    /** Shows event modal on click */
    function handleClick(evt: any){
        console.log(evt)
        setShowEvent(true);
    }

    /** Closes event modal on click */
    function handleClose(){
        setShowEvent(false);
    }

    /** Deletes event on double click 
     * Sends event id to App
    */
    function handleDelete(evt: any){
        console.log(evt)
        deleteEvent(evt.target.id);
    }

    
    return (
        <div className="event-div" >
            { showEvent && <div className="event-modal">
                <div className="event-content">
                    <div className="title">{date.title} </div>
                    <div className="modal-date">
                        <span>February </span>
                        <span>{date.date} </span>
                    </div>
                    <div className="description">
                        <span className="heading">Description: </span>
                        <span className="content">{date.description} </span>
                    </div>
                    <Button 
                        className="close" 
                        variant="outline-dark" 
                        onClick={handleClose}>
                        Close
                    </Button >
                </div>
            </div>}
            <div className="event-button" >
                <span 
                    className="event"
                    key={date.id} 
                    onClick={handleClick}
                    role="button"> 
                    {date.title}
                </span>
                <span 
                    className="delete"
                    id={date.id}
                    onDoubleClick={handleDelete} 
                    role="button">
                    x
                    <span className="delete-tooltip">
                        Double-click to delete!
                    </span>
                </span>
            </div>
        </div>
    )

}


export default Event;