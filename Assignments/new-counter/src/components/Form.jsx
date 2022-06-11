import React from 'react'
import "./Form.module.css"

const Form = () => {
    const [data, setdata]= React.useState({});

    const handleSubmit= (e) => {
        e.preventDefault();
        //fetchurl, {method: post, body:JSON.stringify(data)}
        console.log(data);
    }

    const handleChange= (e)=>{
        const inputName = e.target.name;
        if(e.target.type==="checkbox"){
            setdata({
                ...data,
            [inputName]:e.target.checked
            })

        }
        else if(e.target.type==="file"){
            setdata({
                ...data,
            [inputName]:e.target.files
            })
        }
        else{
            setdata({
                ...data,
            [inputName]:e.target.value
            })
        }
            

        
      
    }
 return (
    <form onSubmit={handleSubmit}>
        <div className='grid'>
            <label>Username</label>
            <input  type="text" name="name" onChange={handleChange}/>
        </div>
        <div className='grid'>
            <label>Password</label>
            <input  type={data.showPassword?"text":"password"} name="password" onChange={handleChange}/>
        </div>
        <div className='grid'>
            <label>Show Password</label>
            <input  type="checkbox" name='showPassword' onChange={handleChange}/>
        </div>
        <div className='grid'>
            <label>Age</label>
            <input type="number" name="age" onChange={handleChange}/>
        </div>
        <div className='grid'>
            <label>DOB</label>
            <input type="date" name="dob" onChange={handleChange}/>
        </div>
        <div className='grid'>
            <label>Resume</label>
            <input type="file" name="resume" onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form