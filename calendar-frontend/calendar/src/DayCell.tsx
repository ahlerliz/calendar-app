import React from "react";
import Event from "./Event";
import "./DayCell.css";
import { EventData } from "./api";


/** Individual date cell
 * 
 * - Is rendered by Calendar to show each day in grid
 * 
 * Calendar -> DayCell -> Event
*/
interface DayDate {
    date:number
}
interface DayCellProps {
    day: DayDate | any;
    events: EventData[] | null;
    deleteEvent: any;
}

function DayCell({day, events, deleteEvent}: DayCellProps){


    return (
        <td className="DayCell">
            <div className="date">
                <div>
                    {day && day.date}
                </div>
                <div>
                    {day && events && (events.filter(
                        (event) => Number(event.date) === day.date))
                        .map(date => <Event 
                            key={date.id && (date.id + date.date)} 
                            date ={date} 
                            deleteEvent={deleteEvent}/>)}
                </div>
            </div>
        </td>
    )
}


export default DayCell;