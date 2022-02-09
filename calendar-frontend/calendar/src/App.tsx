import React, { useState, useEffect }  from "react";
import Header from './Header';
import Calendar from './Calendar';
import CalendarApi, { EventData } from "./api";
import './App.css';


/** Calendar application 
 * 
 * - events: events obj from API. This is central state management
 * for all event data. Passed down as prop to Calendar
 * 
 * - refresh: handles if the page need to rerender after adding or 
 * deleting an event
 * 
 * App -> Calendar, Header
*/


function App() {
  console.log("App")
  const [events, setEvents] = useState(null);
  const [refresh, setRefresh] = useState(false);
  

  /** Load event data on app mount.
   * 
   * Runs when "refresh" state is changed
   */
  useEffect(function getEventsOnMount() {
      console.debug("Calendar useEffect getEventsOnMount");
      getEvents();
    }, [refresh]);

  // setInterval(function(){ 
  //     getEvents();
  //   }, 5000)

  /** Makes API call to get all events */
  async function getEvents() {
      let allEvents = await CalendarApi.getEvents();
      setEvents(allEvents);
    }

  /** Adds event: makes API call to post event and changes 
   * "refresh" state */
  async function addEvent(formData: EventData){
    await CalendarApi.addEvent(formData);
    setRefresh(!refresh);
  }
  /** Deletes event: makes API call to delete event and changes 
   * "refresh" state */
  async function deleteEvent(id: string){
    await CalendarApi.deleteEvent(id);
    setRefresh(!refresh);
}

  return (
    <div className="App">
      <Header addEvent={addEvent}/>
      <Calendar events={events} deleteEvent={deleteEvent}/>
    </div>
  );
}

export default App;
