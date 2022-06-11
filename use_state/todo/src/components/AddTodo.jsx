import React from 'react';

const AddTodo = ({onAdd}) => {
    const [str,setstr]= React.useState("");
    // WRITING TO POST
    const postTodo = async (value) => {
      let res = await fetch("http://localhost:3000/todos",{
          method:'POST',
          headers: {"content-type": "application/json"},
          body : JSON.stringify({
            value,
            completed : false
          })
      })
      let data= await res.json();
      onAdd(data);
  }
  return (
    <div>
        <input value={str} placeholder="Enter your todo here" type="text" onChange={(e)=>{setstr(e.target.value)}} />
        <button onClick={()=>{
          let value=str.trim();
          if(value)
          {
            postTodo(value); 
            setstr("");
            }}}>ADD</button>
    </div>
  )
}

export default AddTodo;