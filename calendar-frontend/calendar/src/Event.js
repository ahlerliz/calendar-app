import React, { useState } from "react";
import {Button} from "react-bootstrap";
import "./Event.css";

function Event({date, deleteEvent}){
    console.log("Event")
    const [showEvent, setShowEvent] = useState(false)

    function handleClick(evt){
        console.log(evt)
        setShowEvent(true);
    }

    function handleClose(evt){
        setShowEvent(false);
    }
    function handleDelete(evt){
        console.log(evt)
        deleteEvent(evt.target.id);
    }

    
    return (
        <div>
            { showEvent && <div className="EventModal">
                <div className="EventContent">
                    <div className="title">{date.title} </div>
                    <div className="modal-date">
                        <span>February </span>
                        <span>{date.date} </span>
                    </div>
                    <div className="description">
                        <span className="heading">Description: </span>
                        <span className="content">{date.description} </span>
                    </div>
                    <Button className="close" variant="outline-dark" onClick={handleClose}>
                        Close
                    </Button >
                </div>
            </div>}
            <div className="EventButton" >
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
                </span>
            </div>
        </div>
    )

}


export default Event;