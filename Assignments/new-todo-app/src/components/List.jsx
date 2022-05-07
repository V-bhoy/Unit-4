import React from 'react'
import ListItem from './ListItem';
import ListObject from './ListObject';

const List = () => {
   const [list, setlist] = React.useState([]);
   const [pageNumber,setpageNumber]= React.useState(1);
   React.useEffect(()=>{
    const stored = async () =>{
        let res=await fetch(`http://localhost:3000/data?_page=${pageNumber}`);
        let data= await res.json();
        setlist(data);
    }
    stored();
   
    
   },[pageNumber])
   const onAdd = (data)=>{
      
       setlist([...list,data]);

   }
   const mark = (obj)=>{
        let new_list= list.map((elem)=>{
            if(elem.id===obj.id){
                return obj;
            }
            else
            {
                return elem;
            }
        })
        setlist(new_list);
   }
   const edited = (objItem) => {
      let update= list.map((elem)=>{
          if(objItem.id===elem.id){
              return objItem;
          }
          else{
              return elem;
          }
      })
       setlist(update);
   }
   const del= (obj)=>{
       let updated= list.filter((elem)=>obj.id!==elem.id);
       setlist(updated)
   }
  return (
    
    <div>
       <ListItem onAdd={onAdd}/>
       {list.map((elem)=>(
           <ListObject key={elem.id} listobj={elem} mark={mark} del={del} edited={edited}/>
       ))} 
       <br/>
       <br/>
       <button >SAVE</button>
       <br />
       <br/>
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

export default List;