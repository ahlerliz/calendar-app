import React from "react";


function NewEventForm({show, addEvent}){

    console.log("NewEventForm")

    function handleSubmit(evt){
        evt.preventDefault();
        addEvent();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default NewEventForm;