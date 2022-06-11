import React from 'react';
import styles from "./todo.module.css";
const Todo = ({todo,onDelete,onEdit}) => {
  const [isEdit, setisEdit] = React.useState(false);
  const [value,setvalue]= React.useState(todo.value);
  const deleteTodo = async ()=>{
    await fetch(`http://localhost:3000/todos/${todo.id}`,{
      method : "DELETE",
    });
    onDelete(todo.id);
  }
  const editTodo = async(value)=>{
     let res=await fetch(`http://localhost:3000/todos/${todo.id}`,{
      method: "PATCH",
      headers: {"content-type":"application/json"},
      body: JSON.stringify({
        value,
        completed: true
      })
    })
    let data=await res.json();
    onEdit(data);
  }
  return (
    <div className={todo.completed? styles.lineThrough : ""}>
      { isEdit ? (<div>
        <input
          type="text"
          placeholder='enter your todo thing'
          value={value}
          onChange={(e)=>{setvalue(e.target.value)}}
      />
      <button onClick={()=>{let v=value.trim();
      if(v){
         editTodo(value);
         setisEdit(false);
      }}}> UPDATE</button>
      </div>
      ):(<div>{todo.value}</div>)}
      <div>
        <button onClick={()=>setisEdit(!isEdit)}>Edit</button>
        <button onClick={()=>{deleteTodo()}}>DEL</button>
      </div>
    </div>
  )
}
export default Todo;














