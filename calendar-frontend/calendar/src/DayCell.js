import React from "react";
import Event from "./Event";

function DayCell({day}){
    console.log("DayCell")

    return (
        <td>
            {day && day.date}
        </td>
    )
}


export default DayCell;