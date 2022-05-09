import React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import {AuthProvider} from './context/AuthProvider'

function App() {
  return (
    <div className="App">
       <AuthProvider>
          <Nav />
          <Login />
       </AuthProvider>
          
      
        
    </div>
  );
}

export default App;
