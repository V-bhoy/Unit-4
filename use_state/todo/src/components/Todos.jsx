import React from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

const Todos = () => {
    const [todos,settodos]= React.useState([]);
    const [pageNumber,setpageNumber]= React.useState(1);
    

    const onAdd= (str)=>{
        

         settodos([...todos,str]) ; 
         console.log(todos); 
    };

    const onDelete=(id)=>{
        const updated = todos.filter((elem)=>elem.id!==id);
        settodos(updated);
        console.log(updated);
    }

    const onEdit=(todo)=>{
        const newList = todos.map((elem)=>{
            if(elem.id===todo.id){
                return todo;
            }
            else{
                return elem;
            }
        })
        settodos(newList);
        console.log(newList)
    }

    

  React.useEffect(()=>{
    const getList = async ()=>{
        try{
             let res= await fetch(`http://localhost:3000/todos?_page=${pageNumber}`);
             let data= await res.json();
             settodos(data);
        }
        catch(e){
            console.log(e);
        }
    }
    getList()
  },[pageNumber]);

  return (
      <div>
          <AddTodo onAdd={onAdd}/>
          {todos.map((elem)=>(
              <Todo key={elem.id} todo={elem} onDelete={onDelete} onEdit={onEdit}/>
          ))}
          <div>
              <button onClick={()=>{
                if(pageNumber>1){
                    setpageNumber(pageNumber-1)
                }}}>Previous</button>
              <button onClick={()=>setpageNumber(pageNumber+1)}>Next</button>
          </div>
      </div>
    
  )
}

export default Todos