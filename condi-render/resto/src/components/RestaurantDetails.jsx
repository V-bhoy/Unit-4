import React from "react";
import data from "./data.json"

const RestaurantDetails = ()=>{
    let wraps=data[0].wraps;
    console.log(wraps)
    return(
        <>
            {wraps.map((elem)=>{
            return(
                <div style={{width:"60%",display:"flex",height:"250px",justifyContent:"space-around"}}>
                    <div style={{width:"40%"}}>
                        <img src={elem.image} alt="" style={{width:"100%"}} />
                    </div> 
                    <div>
                       <h4>{elem.name}</h4>
                       <p>{elem.type[0]}, {elem.type[1]}</p>
                       <p>Cost </p>

                    </div> 
                
                </div>
    
            )
           })}
        </>
    )

        
}

export default RestaurantDetails;