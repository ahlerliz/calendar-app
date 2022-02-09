import React from "react";
import "./Event.css";

function Event({date, deleteEvent}){
    console.log("Event")

    function handleDelete(evt){
        console.log("Event target", evt.target.id)
        deleteEvent(evt.target.id)
    }
    return (
        <div 
            key={date.id} 
            id={date.id}
            className="EventButton" 
            onDoubleClick={handleDelete} 
            role="button"> 
            {date.title} 
        </div>)
}


export default Event;