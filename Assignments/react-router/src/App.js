import React from "react";
import { Routes, Route} from 'react-router-dom'

//import Cart from "./pages/Cart";
import Login from "./pages/Login";
//import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
//import Product from "./pages/Product";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
    
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="register" element={<Register />}/>
            <Route path="signin" element={<Login />}/>
        </Routes>

    
       
    
    </div>
  );
}

export default App;
