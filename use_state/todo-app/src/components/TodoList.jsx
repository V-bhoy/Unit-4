import React from "react";


  const TodoList = (props)=>{
    
    const [clname, setclname] = React.useState("btn")
    const complete= ()=> {
         setclname("btn1");
    }
  
    return (
       <div class="content" onClick={()=>complete()} style={{display:"flex"}}>
        <button className={clname} ></button>
        <div key={props.key}>{props.name}</div>
        
        
       </div>
    )

}

export default TodoList;