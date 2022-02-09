import React from "react";
import Event from "./Event";
import "./DayCell.css";
import CalendarApi from "./api";

function DayCell({day, events, deleteEvent}){




    // function deleteEvent(id){
    //     events = events.filter((event) => event.id !== id)
    //     CalendarApi.deleteEvent(id)
    // }

    return (
        <td className="DayCell">
            <div className="date">
                <div>
                    {day && day.date}
                </div>
                <div>
                    {day && events && (events.filter(
                        (event) => event.date == day.date))
                        .map(date => <Event key={date.id + date.date} date ={date} deleteEvent={deleteEvent}/>)}
                </div>
            </div>
        </td>
    )
}


export default DayCell;