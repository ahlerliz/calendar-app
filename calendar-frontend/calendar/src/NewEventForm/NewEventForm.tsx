import React from "react";
import {Form,Button} from "react-bootstrap";
import "./NewEventForm.css";

/** Form for adding new event
 * 
 * - Is rendered by Calendar to show each day in grid
 * 
 * Header -> NewEventForm
*/

function NewEventForm({ addEvent, closeEvent}: any){
    console.log("NewEventForm");

    const dates = Array.from(Array(29).keys());
    dates.shift();

    /** Handles form submission
     * Sends form data to App
     */
    function handleSubmit(evt: any){
        evt.preventDefault();
        let formData = {
            date: evt.target[0].value, 
            title: evt.target[1].value, 
            description: evt.target[2].value}
        
        addEvent(formData);
        closeEvent()
    }

    /** Closes form on call */
    function handleClose(){
        closeEvent();
    }

    return (
        <div className="NewEventForm" >
            <Form className="form-content" onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label className="label">Date</Form.Label>
                    <Form.Select aria-label="date">
                        {dates.map((date) => <option value={date} key={"date"+date}>{date}</option>)}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="label">Title</Form.Label>
                    <Form.Control type="title" placeholder="Add Title" maxLength={30}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="label">Description</Form.Label>
                    <Form.Control as="textarea" type="Description" placeholder="Add Description" maxLength={200}/>
                </Form.Group>
                <Button className="save" variant="primary" type="submit">
                    Save
                </Button >
                <Button className="close" variant="outline-dark" onClick={handleClose}>
                    Close
                </Button >
            </Form>
        </div>
    
    );
}


export default NewEventForm;