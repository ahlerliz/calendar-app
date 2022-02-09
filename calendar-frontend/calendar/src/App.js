import React, { useState, useEffect }  from "react";
import Header from './Header';
import Calendar from './Calendar';
import CalendarApi from "./api";
import './App.css';


function App() {
  console.log("App")
  const [events, setEvents] = useState(null);
  const [refresh, setRefresh] = useState(false);
  
  useEffect(function getEventsOnMount() {
      console.debug("Calendar useEffect getEventsOnMount");
      getEvents();
    }, [refresh]);

  async function getEvents() {
      let allEvents = await CalendarApi.getEvents();
      setEvents(allEvents);
    }

  async function addEvent(formData){
    await CalendarApi.addEvent(formData);
    setRefresh(!refresh);
  }

  async function deleteEvent(id){
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
