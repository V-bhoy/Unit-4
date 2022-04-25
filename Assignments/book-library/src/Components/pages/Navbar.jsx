import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Bar = styled.nav`
  //height: 50px;
  width: 100%;
  background-color: black;
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  justify-content: flex-end;

`


export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  
  return (
    <>
      <Bar>
        {/* keep all the NavLinks here */}
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/books">Books</NavLink>
        </div>
        <div>
          
          {token?(<NavLink to="/logout">Logout</NavLink>):(<NavLink to="/login">Login</NavLink>)}
          
        </div>
      </Bar>
    </>
  );
};
