import React from "react";
import Comp from "./components/Comp.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
        <Comp name="JOIN US" color="blue"/>
        <Comp name="SETTINGS" color="cyan"/>
        <Comp name="LOGIN" color="orange"/>
        <Comp name="CONTACT US" color="purple"/>
        <Comp name="SEARCH" color="green"/>
        <Comp name="HELP" color="red"/>
        <Comp name="HOME" color="violet"/>
        <Comp name="DOWNLOAD" color="brown"/>
    </div>
  );
}

export default App;
