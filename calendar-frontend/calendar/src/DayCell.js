import React from "react";
import Event from "./Event";
import "./DayCell.css";


/** Individual date cell
 * 
 * - Is rendered by Calendar to show each day in grid
 * 
 * Calendar -> DayCell -> Event
*/

function DayCell({day, events, deleteEvent}){


    return (
        <td className="DayCell">
            <div className="date">
                <div>
                    {day && day.date}
                </div>
                <div>
                    {day && events && (events.filter(
                        (event) => event.date == day.date))
                        .map(date => <Event 
                            key={date.id + date.date} 
                            date ={date} 
                            deleteEvent={deleteEvent}/>)}
                </div>
            </div>
        </td>
    )
}


export default DayCell;