import React from "react";
import { Routes , Route } from "react-router-dom";
import { CategoryCard } from "../components/CategoryCard";
import  Home  from "../components/Home";
import  About  from "../components/About";
import { Products } from "../components/Products";
import { Navbar } from "../components/Navbar";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:category" element={<CategoryCard/>}/>
    
    </Routes>
  </>;
  
};
export { MainRoutes };
