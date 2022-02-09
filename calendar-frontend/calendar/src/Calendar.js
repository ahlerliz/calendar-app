import React, { useState, useEffect }  from "react";
import DayCell from "./DayCell";
import "./Calendar.css"


/** Shows calendar grid 
 * 
 * 
 * App -> Calendar -> DayCell 
*/


function Calendar({monthLength = 28, events, deleteEvent}){
    console.log("Calendar")
    

    const cells = [null, null];
    for (let i = 1; i <= monthLength; i++){
        cells.push({date: i});
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