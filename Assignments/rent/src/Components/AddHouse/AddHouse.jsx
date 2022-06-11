import React from 'react';


export const AddHouse = () => {
  const [dataObj,setdataObj]= React.useState({});
  const prefer= React.useRef([]);
  const handleClick = async(e)=>{
      e.preventDefault();
      await fetch("http://localhost:8080/houses",{
        method: "POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(dataObj)
      })
      //let item=await res.json;
      console.log(dataObj);
  }
  const handleChange = (e)=>{
      const inputName = e.target.className;
      if(e.target.type==="checkbox"){
        if(e.target.checked){
          prefer.current=[...prefer.current,e.target.className]
          setdataObj({...dataObj,"preferredTenants":prefer.current});
        }
        else{
          prefer.current=prefer.current.filter((elem)=>elem!==e.target.className);
          setdataObj({...dataObj,"preferredTenants":prefer.current});

        }
      }
      else{
        setdataObj({...dataObj,[inputName]:e.target.value});
      }
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleClick}>
        <label>name</label>
        <input type="text" className="name" required onChange={handleChange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required  onChange={handleChange}/>
        <br />
        <label>address</label>
        <input type="text" className="address" required  onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
