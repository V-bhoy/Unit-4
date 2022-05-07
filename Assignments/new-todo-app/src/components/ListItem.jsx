import React from 'react'

const ListItem = ({onAdd}) => {
  
  const [item,setitem] = React.useState("");
  const addItem = async (value) => {
      let res= await fetch("http://localhost:3000/data",{
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify({
              value,
              completed: false
          })
         
      })
      let data= await res.json();
      onAdd(data);
  }
  

  return (
       <div>
          <input type="text" placeholder="Enter your todo thing" value={item} onChange={(e)=>setitem(e.target.value)} />
          <button onClick={()=>{
            if(item.trim()){
                addItem(item.trim());
                setitem("");
            }
          }}>ADD</button>
      </div>
    )
}

export default ListItem;