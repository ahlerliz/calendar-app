import logo from './logo.svg';
import Header from './Header';
import Calendar from './Calendar';
import './App.css';

function App() {
  console.log("App")
  return (
    <div className="App">
      <Header/>
      <Calendar />
    </div>
  );
}

export default App;
