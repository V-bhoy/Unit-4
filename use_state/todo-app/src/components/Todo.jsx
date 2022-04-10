import React from "react";
import {nanoid} from "nanoid"
import TodoList from "./TodoList";

const Todo = ()=> {

    const [query, setquery] = React.useState("");
    const [list,setlist] = React.useState([]);

    const addObj = ()=>{
        const Listobj={
            id: nanoid(),
            title: query,
            status: false
        }
        setlist([...list,Listobj])
        setquery("");
    }
    const remove = (item)=>{
         let updatedlist = list.filter(elem=>elem.id!=item.id);
         setlist(updatedlist)
    }

    return(
        <React.Fragment>
            <input class="inp" value={query} onChange={(e)=>setquery(e.target.value)} type="text" placeholder="Type Something..." />
            <button class="btn-grad" onClick={()=>addObj()}>ADD</button>
            
              {list.map((item)=>{
                    return  (
                        <div class="list-item">
                            <TodoList name={item.title} /> 
                            <button class="btn-del" onClick={()=>remove(item)}>Delete</button>
                          
                        </div> 
                    )
              })}
        
        </React.Fragment>
    )
}

export default Todo;