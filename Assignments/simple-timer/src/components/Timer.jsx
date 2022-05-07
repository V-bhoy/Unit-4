import React from 'react'
import { useState } from 'react';

const Timer = () => {
    const [time,setTime] = useState(0);
    
  
    const startTimer=()=>{
        let sec=time;
        let timer=setInterval(()=>{
            sec++;
            setTime(sec);
            if(sec===6){
              clearInterval(timer);
              setTime(0);
            }
        },1000)
       
     }


  return (
    
    <>
    <div>Timer: {time} </div>
    <button onClick={()=>{startTimer()}}>Start</button>
    </>
  )
}

export default Timer