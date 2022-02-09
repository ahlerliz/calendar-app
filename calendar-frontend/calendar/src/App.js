import React, { useState, useEffect }  from "react";
import Header from './Header';
import Calendar from './Calendar';
import CalendarApi from "./api";
import './App.css';


function App() {
  console.log("App")
  const [events, setEvents] = useState(null);
  const [refresh, setRefresh] = useState(0);
  
  useEffect(function getEventsOnMount() {
      console.debug("Calendar useEffect getEventsOnMount");
      getEvents();
    }, [refresh]);

  async function getEvents() {
      let allEvents = await CalendarApi.getEvents();
      setEvents(allEvents);
    }

  function refreshPage(){
    console.log(refresh)
    setRefresh(refresh + 1);
  }

  return (
    <div className="App">
      <Header refreshPage={refreshPage}/>
      <Calendar events={events}/>
    </div>
  );
}

export default App;
