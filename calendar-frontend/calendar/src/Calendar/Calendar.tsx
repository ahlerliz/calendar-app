import React  from "react";
import DayCell from "../DayCell/DayCell";
import "./Calendar.css"
import {EventData} from "../api"

/** Shows calendar grid 
 * 
 * 
 * App -> Calendar -> DayCell 
*/

interface CalendarProps {
    monthLength?: number;
    events: EventData[] | null;
    deleteEvent: any;
}


function Calendar({monthLength = 28, events, deleteEvent}: CalendarProps){
    console.log("Calendar")
    
    // this is hard coded for the month of February, 2 null days are 
    // followed by the 28 days of February
    const cells = [null, null];
    for (let i = 1; i <= monthLength; i++){
        let dateDay: any = {date: i}
        cells.push(dateDay);
    }

    while (cells.length < 35){
        cells.push(null)
    }

    /** Creates individual cells with correct date data */
    let grid = [];
    for (let y = 0; y < 5; y++) {
        let row = [];
        for (let x = 0; x < 7; x++) {
        row.push(
            <DayCell
                key={(y * 7) + x - 1}
                day = {cells.shift()}
                events = {events}
                deleteEvent = {deleteEvent}
            />,
        );
        }
        grid.push(<tr key={"row " + y}>{row}</tr>);
    }
    return (
        <table className="Calendar">
            <tbody>{grid}</tbody>
        </table>
    );

}


export default Calendar;