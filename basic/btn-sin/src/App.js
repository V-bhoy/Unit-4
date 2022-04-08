import React from 'react';
import './App.css';
import JoinUs from './JoinUs';
import Settings from './Settings';
import Login from './Login';
import Search from './Search';
import ContactUs from './ContactUs';
import Help from './Help';
import Home from './Home';
import Download from './Download';

function App() {
  return (
    <div className="App">
         
         <JoinUs />
         <Settings />
         
          <Login />
         <ContactUs />
          
          
         
         <Search />
         <Help />
         <Home />
         <Download />
    </div>
  );
}

export default App;
