import React from "react";


const Comp = (props) => {
    return (
        <>
          <button className="btn" style={{backgroundColor:props.color}}>{props.name}</button>
        </>
    )
}

export default Comp;