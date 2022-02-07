import React from "react";
import Event from "./Event";
import "./DayCell.css";

function DayCell({day}){
    console.log("DayCell")

    return (
        <td className="DayCell">
            <div className="date">
                {day && day.date}
            </div>
        </td>
    )
}


export default DayCell;