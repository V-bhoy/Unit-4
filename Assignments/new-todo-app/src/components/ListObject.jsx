import React from 'react'

const ListObject = ({listobj,mark,del,edited}) => {
    const [isedit, setisedit] = React.useState(false);
    const [value,setvalue]= React.useState("");
    const markComplete=async()=>{
        let res=await fetch(`http://localhost:3000/data/${listobj.id}`,{
            method:"PATCH",
            headers:{"content-type": "application/json"},
            body:JSON.stringify({
                value: listobj.value,
                completed: true
            })
         
        })
        let data= await res.json();
        mark(data);
    }
    const editObj = async(val)=>{
        let res=await fetch(`http://localhost:3000/data/${listobj.id}`,{
            method:"PATCH",
            headers:{"content-type": "application/json"},
            body:JSON.stringify({
                value: val,
                completed: false
            })
         
        })
        let data= await res.json();
        edited(data);
    }
    
    const deleteObj = async ()=> {
       await fetch(`http://localhost:3000/data/${listobj.id}`,{
           method: "DELETE"
       })
       del(listobj)

    }
    const comp_style = () =>{
        return listobj.completed? {color:"green"}:{color:"red"};
    }

  return (
   
    <div>{ isedit?(
        <>
        <input type="text" placeholder='Enter your todo thing' value={value} onChange={(e)=>setvalue(e.target.value)} />
        <button onClick={()=>{if(value.trim()){editObj(value);setisedit(false);}}}>UPDATE</button>
        </>
     ):
     (<div  style={comp_style()}>{listobj.value}</div>)}
       
       <div>
           <button onClick={()=>markComplete()}>Mark Complete</button>
           <button onClick={()=>setisedit(!isedit)}>Edit</button>
           <button onClick={()=>deleteObj()}>Delete</button>
       </div>
    </div>
  )
}

export default ListObject;