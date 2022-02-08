import React from "react";
import {Form,Button} from "react-bootstrap";
import "./NewEventForm.css";

function NewEventForm({show, addEvent}){
    console.log("NewEventForm");

    const dates = Array.from(Array(29).keys());
    dates.shift();

    function handleSubmit(evt){
        console.log("form submitted")
        evt.preventDefault();
        addEvent(evt);
    }
    return (
        <div>
            <form className="NewEventForm" onSubmit={handleSubmit}>
                <Form className="FormContent">
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Date</Form.Label>
                        <Form.Select aria-label="date">
                            {dates.map((date) => <option value={date}>{date}</option>)}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Title</Form.Label>
                        <Form.Control type="title" placeholder="Add Title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="label">Description</Form.Label>
                        <Form.Control as="textarea" type="Description" placeholder="Add Description" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Save
                    </Button >
                </Form>
            </form>
        </div>
    );
}


export default NewEventForm;