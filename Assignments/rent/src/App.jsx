import React from 'react';
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [show,setshow]= React.useState(false);
   
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>setshow(!show)}> ADD HOUSE
      
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      {show?(<AddHouse />):(<Rentals />)}
      <br />
    </div>
  );
}

export default App;
