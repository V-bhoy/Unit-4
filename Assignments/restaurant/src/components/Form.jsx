import React from 'react'
import "./resto.css"

const Form = ({addFood}) => {
    const [dataObj,setdataObj]= React.useState({})
    const payments=React.useRef([]);
    const categories=React.useRef({});
    const handleClick = async(e)=>{
       e.preventDefault(); 
       let res=await fetch("http://localhost:8080/data",{
           method:"POST",
           headers:{"content-type":"application/json"},
           body: JSON.stringify(dataObj),
       }) 
       let item= await res.json();
       addFood(item);
       console.log(dataObj); 
    }
    const handleChange= (e)=>{
        const Inputname= e.target.name;
        if(e.target.type==="checkbox"){
            if(e.target.checked){
                payments.current=[...payments.current,e.target.name];
                console.log(payments.current);
                setdataObj({...dataObj,"payment":payments.current});
            }
            else{
                if(payments.current.includes(e.target.name)){
                    payments.current=payments.current.filter((elem)=>elem!==e.target.name)
                    setdataObj({...dataObj,"payment":payments.current});
                    console.log(payments.current);
                }
            }
        }
        else if(Inputname==="categories"){
             categories.current={...categories.current,[e.target.id]:e.target.value.trim()};
             setdataObj({...dataObj,"categories":categories.current});
        }
        else{
            setdataObj({...dataObj,[Inputname]:e.target.value.trim()});
        }
    }
  return (
    <form className='form' onSubmit={handleClick}>
        <div>
            <label>Name Of Restaurant:</label><br/>
            <input type="text" name="name" onChange={handleChange}/>
        </div>
        <div>
            <label>Enter Image Url:</label><br/>
            <input type="text" name='url' onChange={handleChange}/>
        </div>
        <div>
            <label>Enter four main categories:</label><br/>
            <input placeholder='type1' name='categories' id='t1' onChange={handleChange} />
            <input placeholder='type2' name='categories' id='t2' onChange={handleChange}/>
            <input placeholder='type3' name='categories' id='t3' onChange={handleChange}/>
            <input placeholder='type4' name='categories' id='t4' onChange={handleChange}/>
        </div>
        <div>
            <label>Price For One:</label><br/>
            <input type="text" name="price" onChange={handleChange}/>
        </div>
        <div>
            <label>Minimum Price:</label><br/>
            <input type="text" name="minprice" onChange={handleChange} />
        </div>
        <div>
            <label>Rating:</label><br/>
            <input type="text" name="rating" onChange={handleChange} />
        </div>
        <div>
            <label>Payment Methods:</label><br/>
            <input type="checkbox" name="card" onChange={handleChange}/>Card
            <input type="checkbox" name="cash" onChange={handleChange}/>Cash
            <input type="checkbox" name="upi" onChange={handleChange}/>Upi
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form