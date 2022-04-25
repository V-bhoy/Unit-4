import React from "react";
import { useEffect, useState } from "react";
//import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";

export const Grid = styled.div`
 //add required style here
 display: grid;
 grid-template-columns: repeat(2,1fr);
 width: 80%;
 margin: auto;
 gap: 20px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData=async()=>{
      let res= await fetch("http://localhost:8080/books");
      let database= await res.json();
      setData(database);
    }
    getData();
    
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {
            data.map((elem)=>(
               <div key={elem.id}>
                  <BookCard id={elem.id} title={elem.title} isbn={elem.isbn} pageCount={elem.pageCount} thumbnailUrl={elem.thumbnailUrl}/>
               </div>
            ))
          }
      </Grid>
      <Outlet />
    </>
  );
};
export default Books;
